---
sidebar: auto
prev:
    text: 'OpenStack Installation'
    link: '/exercises/02-openstack/02-openstack-install'
---

# Create and Manage IaaS Resources in OpenStack

::: warning Hint
Following commands must run on your virtual machine (eg. your Proxmox machine) via SSH or in Proxmox Console. Prefer SSH since you can use copy+paste.
:::

Before we start to create resources in our Openstack environment, please check if all services are running with ``systemctl status devstack@*``.

## Login to Dashboard
Login to your Horizon Dashboard using ``admin`` as username and your password from `local.conf` file.

![OpenStack Dashboard](./img/dashboard.png)
*OpenStack Dashboard.* 

Your OpenStack environment is divided through the use of projects (see tabs on the left). Every project can have associated users, which have different levels of permissions defined by user roles.
In this exercise we will create a new Project and User in our OpenStack environment. Afterwards we will create a Private Network and launch a Virtual Machine inside that network. 
Furthermore, we will configure our Private Network to talk to the public network so that we can access the OpenStack Virtual Machine through our Proxmox Machine.

But first, let's have a look into the OpenStack Dashboard. 
After logging into your Dashboard as an administrator you well see the tabs ``Projects``, `Admin` and `Identity` in the left-hand corner. 
Items under the ``Projects`` tab allow you to view and manage resources in a selected project, like instances and images. You can toggle between projects by using the dropdown menu in the upper left-hand corner, which should show `admin` and `demo` projects after a clean installation of DevStack.

Within the ``Projects`` tab, you have the ability to view and configure additional settings tabs that will help you manage your instances. 
These additional tabs include the ``Compute``, ``Volumes`` and `Network`. In a real-world installation of OpenStack there can be more than those 3 tabs, e.g.: ``Container Infra``, ``Orchestration`` and ``Object Store``.

The **Compute** tab contains the following views and options:

* **Overview** allows you to view reports for the project.
* **Instances** allow you to view and launch an instance. You can also create an instance from a snapshot and stop, pause, or reboot instances.
* **Images** allow you to view images and instance snapshots, as well as images that are publicly available. You can launch instances from images and snapshots, and create edit, and delete images.
* **Key Pairs** allow you to view, create, edit, import, and delete key pairs. For example needed to allow ``SSH`` connections to your instances
* **Server Groups** allow a server group to be assigned to launch the instance.

The **Volumes** tab contains the following views and options:

* **Volumes** allows you to view, create, edit, and delete volumes. A volume refers to a block storage device that can be attached to an instance. It provides persistent storage to instances, allowing to store and retreive data independently from your instance state (eg running, shut down)
* **Backups** allow you to view, create, edit, and delete backups.
* **Snapshots** allow you to view, create, edit, and delete volume snapshots.
* **Groups** allow you to view, create, edit, and delete consistency groups.
* **Group** Snapshots allow you to view, create, edit, and delete consistency group snapshots.

The **Network** tab contains the following views and options:

* **Network Topology** allows you to view the network topology.
* **Networks** allows you to create and manage public and private networks.
* **Routers** allow you to create and manage routers, which are connected to your networks.
* **Security Groups** allow you to view, create, edit, and delete security groups and security group rules.
* **Floating IPs** allows you to assign an IP address to or release it from a project.


Items under the ``Identity`` tab give you the ability to view and manage projects that you’re on, as well as assign and remove users.

The **Identity** tab contains the following views and options:

* **Projects** allow you to view, create, assign users to, remove users from, and delete projects.
* **Users** allow you to view, create, enable, disable and delete users.
* **Application Credentials** allow you to create and manage credentials for accessing a selected project.

    
## Create a Project
First we will create a new Project and associate a User with it. To create your first project, navigate to Identity -> Projects.

![OpenStack projects](./img/projects.png)
*Projects.*

Several projects already exist, including the admin project. These projects are deployed by default and generally should not be modified.

Click the ``Create Project`` button near the top right to create a new project.

![OpenStack Dashboard](./img/create_project.png)
*Create a Project*

Under the Name field, specify a name for the project. 
This example project is called **myproject**. You can also add Project Members and Project Groups but we are not going to cover those yet. Click Create Project to finish creating the first project.

Once created, the project appears in the Project Listing page.
 
## Create a User
Now that we have a project, we can associate a user to it. 
There is already the default ``admin`` user. To create a new user first navigate as admin to Identity -> Users. 
By default, there are several users already listed for specific OpenStack services. These are created during cloud deployment and should generally not be modified.

Click the ``Create User`` button.

![Create User](./img/create_user.png)
*Create a User*

On the Create User form set values for **Username, Password, Primary Project, and Role**. 
Choose a password that you can remember easily. For the `Primary Project` choose the project you created earlier.
For ``Role`` there are several options depending on the level of access required. 
The default OpenStack roles are reader, member, and admin. Additional roles also exist in the drop down. 
Reader is the least authoritative role in the hierarchy. For this example, choose ``member`` for the role.

Press Create User to create the user.

Afterwards navigate back to **Projects** and select ``Manage members`` on the right corner of your project.
Make sure that your new user and the ``admin`` user are associated with your project and have the correct permissions:

![Manage User Permissions in Project](./img/manage_users_project.png)
*Manage User Permissions in Project*

Next, log out of Horizon as admin, and log back in with your new user. Upon logging back in you are by default in the newly created project. You can see the project you are currently in at the top left and your user can be seen at the top right of Horizon.

![User Dashboard](./img/dashboard_user.png)
*User Dashboard*

## Manage Images and Virtual Machines in OpenStack
Before we will create the Private Network and Virtual Machine, let's take a look into the ``Images`` tab under `Compute`.
Images contain a bootable operating system that OpenStack uses to create an Instance. 

The DevStack installation comes with a preinstalled image ``cirros-0.6.1-x86_64-disk`` which we will use in this exercise.

![OpenStack Images](./img/images.png)
*OpenStack Images*

It is possible to upload other image files to use different operating systems in your virtual machine instances.
For example you could Download [CentOS ISO](http://ftp.tugraz.at/mirror/centos/8-stream/isos/x86_64/) and add it to your images via the ``Create Image`` section.
In this exercise we will use the preinstalled CirrOS image.

### Instances in OpenStack
With OpenStack, instances, or virtual machines, play a large role in a cloud’s workload. 
OpenStack provides a way to create and manage instances with its compute service, called **Nova**.

Nova is the OpenStack project that provides a way to provision compute instances and supports creating virtual machines, baremetal servers, and has limited support for system containers. 
Nova runs as a set of daemons on top of existing Linux servers to provide that service.

In the following steps we will create an instance, including setting up a private network and router, creating a security group, and add an SSH key pair so that we can communicate to that instance.

## Create a Private Network
Before we create a virtual machine we will setup a private network and a router in which the VM will run. 
To create a private network, begin by navigating to **Project -> Network -> Networks**. Then click ``Create Network``.

![Create Private Network](./img/create_private_network.png)
*Create Private Network*

We will create a network named ``private`` which has a subnet called `private-subnet`, which we will use to logically division our IP network.

![Create Private Network Step 1](./img/create_network1.png)
*Create Private Network Step 1*

In a first step give your Network the name ``private`` and leave all other settings by default. Press `next` to enter the Subnet menu.

![Create Private Network Step 2](./img/create_network2.png)
*Create Private Network Step 2*

In the Subnet tab select ``private-subnet`` as a name and give it a network range for example `192.168.0.1/24`. This allows a host range from 192.168.0.1 to 192.168.0.254, allowing for a maximum of 254 hosts within the subnet (excluding the network and broadcast addresses).

![Create Private Network Step 3](./img/create_network3.png)
*Create Private Network Step 3*

Leave all Subnet Details by default. We let DHCP enabled so that the network automatically assigns IP addresses, subnet masks, default gateways and other network configurations.

## Create a Router
Next we will create a router to bridge the connection between the private and the public network. By default the public network is already configured in DevStack and is called ``public``.

To create a router, begin by navigating to **Project -> Network -> Routers**. Click ``Create Router``.

![Create Router](./img/create_router.png)
*Create Router*

Simply name your router ``router`` and select `public` as your external network.

Now we need to add the router to our network. We will do so by attaching an interface to it. Click ``router`` inside your Router list to navigate to the routers details screen.

Inside the router details select ``Interfaces`` and `Add Interface`:
![Add Interface to router](./img/add_interface.png)
*Add Interface to router*

On the new interface, choose the ``private-subnet`` for Subnet. 
If you don't set an IP address one is selected automatically. 
Press ``Submit`` to attach the private network to this router. The interface is then attached and now listed.

![Interfaces of router](./img/interfaces.png)
*Router Interfaces*

You can visually see the network topology for your cloud by navigating to **Project -> Network -> Network Topology**:

![Network Topology](./img/topology.png)
*Network Topology*

Your ``public`` network is now connected to your `private` network using the router named `router`. We can ignore the `shared` network by now, since it has no effect on our topoplogy.

## Create a Security Group
Security groups allow control of network traffic to and from virtual machines. 
For example, port 22 can be opened for SSH for a single IP or a range of IPs.

Later on we will need to SSH our instance, so we will now create a Security Group with the corresponding configurations to do so.

To view and manage security groups, navigate to **Project -> Network -> Security Groups**.

You should notice a single security group called ``default``. This security group restricts all incoming (``ingress``) network traffic and allows all outgoing (``egress``) network traffic. 
When an instance is created, this security group is applied by default.

To create a security group for SSH, click ``Create Security Group`` near the top right.
Name the group **SSH** and then click ``Create Security Group``.
![Create Security Group](./img/security_group.png)
*Create Security Group*

After creating the SSH security group, we need to add a **rule** allowing SSH traffic. 
We will first apply a rule to allow pinging our future instance. 
Afterwards we will allow SSH traffic to the instance with another rule.

To add a rule, load the form by navigating to ``Add Rule`` near the top right.

Firstly, select ``All ICMP`` and click `Add` to create the rule:

![Add rule 1](./img/allow_icmp.png)
*Add rule 1*

"ALL ICMP" refers to allowing all types of ICMP (Internet Control Message Protocol) traffic.  It includes messages such as ping requests (ICMP Echo Request) and ping replies (ICMP Echo Reply), as well as other types of messages for network diagnostics, error reporting, and troubleshooting.

::: warning Warn
It's important to consider the security implications of allowing all ICMP traffic, as certain types of ICMP messages can be misused for network attacks or reconnaissance.
:::

Secondly, create another rule and select ``SSH``. Under `CIDR` you could specify a specific IP address that should be allowed to access via SSH. 
In our example we want the Host VM to have access to the instance. For that we first need to get the Host VM IP address that will access the instance:
Use the following command in your Host VM to display the routing table, which contains information about how network traffic should be forwarded:
````shell
$ ip route show
````

An example output can be the following:

````shell
default via 10.140.0.1 dev ens18 proto static
10.140.0.0/24 dev ens18 proto kernel scope link src 10.140.0.72
172.24.4.0/24 dev br-ex proto kernel scope link src 172.24.4.1
192.168.72.0/24 dev ens19 proto kernel scope link src 192.168.72.1
192.168.122.0/24 dev virbr0 proto kernel scope link src 192.168.122.1 linkdown
````

To know which IP address will be used to communicate with our subnet we need to first check the Routers subnet in the IP address.
In my case the router uses ``172.24.4.139`` interface as **external gateway**, which means the IP address `172.24.4.0/24` of my host machine is the interface that will be used, since they both user 172 as subnet.
Therefore, I will use``172.24.4.0/24`` in **CIDR**.
You can also keep the default of ``0.0.0.0/0`` which allows all machines of that subnet to connect to the instance.

::: danger Attention
Never allow SSH access from all IP addresses in a public cloud deployment!
::: 

![Add rule 2](./img/allow_ssh.png)
*Add rule 2*

## Create an SSH Key
To finish our first network topology with a virtual machine, we will create an instance and enable a SSH connection to it. 
To allow SSH connections we need to provide a **SSH public key** to our instance. We will create the key on our **Host VM** (eg. your VM running in Proxmox) and inject it into our instance when created.
SSH keys cannot be added to already running instances. 

So in a first step we create the SSH key on our Host VM (via SSH) and run the following command:

````shell
$ ssh-keygen
````

> Note: if asked for file location and passphrase just skip it by pressing ``Enter``

The result should look something like the following: 
````shell
Generating public/private rsa key pair.
Enter file in which to save the key (/home/<your_name>/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/<your_name>/.ssh/id_rsa.
Your public key has been saved in /home/<your_name>/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:BNIzHPcqCyjjZqWm88s0zqHrj8J8+gUnkF1cNOEDKZs <your_name>@<your_user>
The key's randomart image is:
+---[RSA 3072]----+
|    o=**o        |
|  o..+Bo..       |
| o .+  =. .      |
|  .E   ...       |
|o .+... S        |
|.oo +. o         |
|o*+  ..          |
|BO.+.            |
|*B@+             |
+----[SHA256]-----+
````

The private key is saved in the default location of ``/home/<your_name>/.ssh/id_rsa`` (see console output for yours) and a passphrase is set for additional security.

To view the contents of the public key, use ``cat /home/<your_name>/.ssh/id_rsa.pub``.
E.g.:
````shell
$ cat /home/leon/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCf+Jxk/vkBVaka5sRQsmtuVQcfVYAS3n2GX3Uc3YdYxzO1G6f8VYr9smte34Gkt3VQ4NJ8Vv1ePbiM+GyYwAgNIYOOBJogViQ44MRrXGuruu5azB+aSVWSdC7kh79wESJwlGpOF4MngxZEvK9p95c8OpDpH6FrptHf/TSWL1p68VzQN8am9F0a4yAeVJwI1w0cJ6rfkP+p9EppKkwX+CCl0Sv9IMt8dT9ncgnjsa9XCF404ZiMsPpEHPhydwtQpPyFUZtJ789bGyAZ6ANLub1LG/o6jLYGEmoo23KEDEf4dWZL4pEuKi89KOyx0XCk7Kbn9KF/w4dhyscgwWrK7vZTrk8VO1EevMTpqfVkpXo+SXXYvZ+adUPVYOaeT0RQQSUMeWh3rFhMmCX231Vaz9ohl5RS6xKZOucT4+5633tAH/WeNlLaRQuIJoabqH3JVq/X1pz2YeANB3zqFiqG+Kxsg8UVP0Y/Ur5y5+WjSsul4mh3FsXFjcywh89uIHp9vy0= leon@cwa-devstack
````

Copy **YOUR** entire key and save it somewhere, we will need it when creating the instance. 
It starts with "ssh-rsa" and continues all the way until the end.

## Create an Instance

To create an instance, begin by navigating to **Project -> Compute -> Instances**. Then click the ``Launch Instance`` button.

![Launch Instance](./img/launch_instance.png)
*Launch Instance*

In the Details view set a name for the instance, eg.: ``mystation``. Leave `nova` as default Availability Zone.

**Count** controls the number of instances spawned. We will create only 1 instance.

![Launch Instance](./img/launch_instance1.png)
*Instance Details*

In the Source tab select the ``cirros`` image (tab the **up-arrow**) and leave default configurations:

* Select Boot Source: Image
* Create New Volume: yes
* Delete Volume on Instance Delete: No
* Volume Size: 1GB

![Launch Instance](./img/launch_instance2.png)
*Instance Source*

Next, move to the Flavor tab. 
Flavors are a way to define the VCPUs, RAM, and Disk space used by an instance. 
Pre-built flavors are available for you. For this step, select an appropriate flavor from the options under the Available heading, for example the m1.tiny flavor. 
Click the **up arrow** to move it to the **Allocated** section.

![Launch Instance](./img/launch_instance3.png)
*Instance Flavor*

In the ``Networks`` section, you specify the network with which the instance is associated. 
Select the ``private`` network created previously.

You should only expose portions of your network as necessary. 
This reduces the attack surface and improves application security. 
If a private network is not created and an instance is created in a default cloud, it is associated with the ``public`` network. 
This means the instance consumes a public IP and it could be reached over the Internet.

![Launch Instance](./img/launch_instance4.png)
*Instance Network*

Next, skip over the Network Ports tab and move to the **Security Groups**.
This is where you select security groups for the instance. 
Click the **up arrow** to move the SSH security group to the ``Allocated`` section.
![Launch Instance](./img/launch_instance5.png)
*Instance Security Groups*

As the final step, move to the **Key Pair** tab.

In this section, you specify an SSH public key to inject into the instance. 
You can upload your key at this stage using this form using the Import Key Pair button. 
You can also create a key pair on this tab.
Click on ``Import Key Pair`` as shown in the image below:

![Launch Instance](./img/launch_instance6.png)
*Import Key Pair*

Provide a name for your key, e.g. ``ssh-key`` and select Key Type `SSH Key`.
In the **Public Key** section paste your public key you saved from before and click ``Import Key Pair`` button:

![Launch Instance](./img/launch_instance7.png)
*Import Key Pair 2*

Once the public key is imported, create the instance by clicking ``Launch Instance``.

The instance goes through a **build** process. Allow a few minutes for this to occur. When complete, the instance appears in the Instances Listing page.

If everything worked out find, your list of instances should look like the following:

![Launch Instance](./img/instance_list.png)
*Newly created instance*

## Assign and Attach a Floating IP
The instance created previously is associated with a private network.
In the context of OpenStack and other cloud computing platforms, a floating IP (also known as a public IP or external IP) is an IP address that is associated with a virtual machine instance or resource within a private network. 
It allows the instance to communicate with external networks and be accessed from the internet.
You can associate the floating IP with the instance by assigning it to the instance's network interface. This binding establishes a link between the floating IP and the private IP of the instance.
In this section, we will learn how to allocate a floating IP and attach it to this instance.

To allocate a floating IP, first navigate to **Project -> Network -> Floating IPs**. 
Then click ``Allocate IP to Project``.

![Allocate Floating IP](./img/floating_ip.png)
*Allocate Floating IP*

In the popup, make sure Pool is set to ``public`` (and optionally add a description) and then click Allocate IP to add this floating IP address for use.
You will see that the floating IP belongs to the subnet your router is using. In my case ``172.24.4.110``:

![Allocate Floating IP](./img/floating_ip2.png)
*Allocate Floating IP subnet*

In the same section, allocate the IP to the instance by clicking the Associate button at the far right.
This will bridge all incoming traffic to, in my case, ``172.24.4.110`` to subnet internal ip address (e.g. ``192.168.0.148``).

![Associate Floating IP](./img/associate_floating_ip.png)
*Associate Floating IP with instance*

## Login via SSH
Now to login to your instance via SSH your need to run ``ssh`` command with your corresponding floating ip address and the path to your public key file.
In my case:

````shell
ssh -i /home/leon/.ssh/id_rsa cirros@172.24.4.110
````

If asked for a password, the default password in a CirrOS image is ``gocubsgo``.

## Troubleshooting
If you face any problems connecting to your instance, please first double check if you did all steps from above.

Try to ping your instance from your Host VM:
````shell
$ ping <YOUR_INSTANCE_FLOATING_IP>
````

If you cannot ping your instance, try to ping the router the same way. You can find the routers IP address in routers section or Network Topology.
If you can ping your router but not your instance, there may be a wrong SSH CIDR defined in your security group rules.
Try to add a rule which accepts all SSH traffic (eg ``0.0.0.0/0`) and check SSH again.

If nothing works, please feel free to ask in the Moodle Forum.

