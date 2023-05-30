
# OpenStack
> Note: This tutorial is heavily based on [OpenStack Tutorials](https://ubuntu.com/openstack/tutorials)

OpenStack is the most popular open source cloud platform that aggregates distributed compute, network and storage resources in the data centre and enables on-demand provisioning of virtual machines through a self-service portal. OpenStack powers thousands of public and private clouds all over the world, providing rapid access for greater innovation and better economics.

## What is MicroStack?
MicroStack is a micro cloud platform based on OpenStack, designed for the edge and small-scale data centre deployments, that can be installed and maintained with minimal effort. MicroStack eliminates the complexity behind OpenStack, providing an opinionated approach to OpenStack architecture design and a straightforward installation method.

## Tutorial Goals
* Install OpenStack on your workstation (e.g. Ubuntu VM or bare metal)
* Launch your first instance on OpenStack

## Prerequisites
* The latest Ubuntu LTS installed (20.04 or higher)
* Multi-core CPU
* 8 GB of RAM
* 100 GB of storage
* Sudorights on your VM

## Installation
[Openstack Installation](https://ubuntu.com/tutorials/install-openstack-on-your-workstation-and-launch-your-first-instance#1-overview)

We’re going to use MicroStack, since it provides the most straightforward installation experience. First, execute the following command to install the microstack snap:
```bash
sudo snap install microstack --beta
```

When the installation process has finished, you should see the following message in the terminal:
```bash
microstack (beta) ussuri from Canonical✓ installed
```

MicroStack can be initialised in either single or multi-node mode. Execute the following command to initialise it in the single-node mode:
```bash
sudo microstack.init --auto --control
```

The command might take several minutes (~20) to complete. Once it finishes, OpenStack is up and running.

## Launching an instance
In order to launch your first instance (VM) on OpenStack, execute the following command:
```bash
microstack.launch cirros --name myInstance
```

The resulting output provides the information you need to SSH to the instance:
```bash
Access it with `ssh -i /home/leon/snap/microstack/common/.ssh/id_microstack cirros@10.20.20.71`
```
> Note: your path and ip address may be different from the one above. Use your own path and ip address for following commands.

In order to connect to the instance, run the following command from the terminal output. In case you’re asked for the password, the default password for the CirrOS image is `gocubsgo`.

```bash
ssh -o "PubkeyAcceptedKeyTypes +ssh-rsa" -i /home/leon/snap/microstack/common/.ssh/id_microstack cirros@10.20.20.71
```

That’s it. You’re connected to the instance. You can use regular shell commands to execute various tasks. For example, you can check the IP address of the instance by running the following command:
```bash
ip a
```

The CirrOS image we used in this example provides a minimalistic operating system only, so the list of commands might be limited. For example, we can check the uptime of the instance:

```bash
uptime
  11:08:36 up 2 min,  1 users,  load average: 0.05, 0.05, 0.01
```

To disconnect from the instance, type exit (or press ``CTRL+D``).

### Get a list of running instances

To get a list of running instances, execute the following command:
```bash
microstack.openstack server list
```








