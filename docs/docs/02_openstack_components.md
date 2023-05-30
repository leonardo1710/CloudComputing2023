# OpenStack Components
> Note: This tutorial is heavily based on [OpenStack Tutorials](https://ubuntu.com/openstack/tutorials)

While OpenStack is a large ecosystem, it can be broken down into smaller pieces.
In principle, OpenStack consists of the following basic components:

* **OpenStack services** expose API endpoints and handle basic cloud functions, such as image catalogue maintenance, instance provisioning, etc.

* **OpenStack dashboard** provides a web-based user interface for OpenStack services.

* **OpenStack client** provides a command-line user interface for OpenStack services.

* **SQL databases** store various records created by OpenStack services.

* **Message queues** facilitate inter-process communication between various components of OpenStack services.

Additional components, such as **NoSQL database** or **memcached**, might be required in more advanced scenarios.

## MicroStack snap CLI

MicroStack snap provides a command-line interface for OpenStack services. 
The CLI is called `microstack.openstack` and it’s a wrapper around the `openstack` CLI. This means you can simply use the MicroStack snap CLI without installing the OpenStack client. 
In order to run a desired command, type ``microstack``. and append the OpenStack client command. For example, to list all launched instances, run:

```bash
microstack.openstack server list --all-projects
```

This returns the instance from the **"OpenStack Installation"** tutorial:

```bash
+--------------------------------------+------------+---------+---------------------------------+--------+---------+
| ID                                   | Name       | Status  | Networks                        | Image  | Flavor  |
+--------------------------------------+------------+---------+---------------------------------+--------+---------+
| 0c2d82b3-5a6d-4d3b-bd1f-583dfcce5898 | myInstance | SHUTOFF | test=192.168.222.81, 10.20.20.5 | cirros | m1.tiny |
+--------------------------------------+------------+---------+---------------------------------+--------+---------+
```
> Note that the ID of the instance and its IP addresses may be different in your environment.


### OpenStack Alias
You can also create an alias for the microstack.openstack command to remove the need to type the microstack. prefix when using the OpenStack client:

```bash
sudo snap alias microstack.openstack openstack
```

