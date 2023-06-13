## Kolla Ansible on Proxmox Ubuntu VM Test

### Prerequisites Host
* Memory 8GB
* Cores 4
* HDD 64GB
* Image Ubuntu 22.04 live server
* 2 Netzwerkinterfaces mit IP Adressen
* SSH Server

```bash
sudo -s
nano etc/netplan/00-installer-config.yaml
netplan apply
```
``00-installer-config.yaml`` File:
```yaml
network:
  ethernets:
    ens18:
      addresses:
        - 10.140.0.71/24 <your ip>
      gateway4: 10.140.0.1 <gateway ip>
      nameservers:
        addresses:
          - 8.8.8.8
          - 9.9.9.9
        search: []
      mtu: 1450
    ens19:
      addresses:
        - 192.168.71.1/24 <your ip>
      mtu: 1450
  version: 2
```


## Kolla Ansible on Proxmox Ubuntu VM

https://docs.openstack.org/kolla-ansible/latest/user/quickstart.html

````bash 
sudo apt update
sudo apt install git python3-dev libffi-dev gcc libssl-dev
sudo apt install python3-venv

python3 -m venv ~/venv
source ~/venv/bin/activate
pip install -U pip

pip install 'ansible-core>=2.13,<=2.14.2'
pip install 'ansible>=6,<8'

pip install git+https://opendev.org/openstack/kolla-ansible@master

sudo mkdir -p /etc/kolla
sudo chown $USER:$USER /etc/kolla

cp -r ~/venv/share/kolla-ansible/etc_examples/kolla/* /etc/kolla
cp ~/venv/share/kolla-ansible/ansible/inventory/all-in-one .

kolla-ansible install-deps
````

### Kolla Passwords
Generiert automatisch Passwörter für die Services:

```bash
kolla-genpwd
```

Then open /etc/kolla/globals.yml file and do configs from <a href="https://docs.openstack.org/kolla-ansible/latest/user/quickstart.html">Tutorial</a> at "Kolla globals.yml".

```bash
sudo nano /etc/kolla/globals.yml
```

kolla_base_distro: "ubuntu"

network_interface: "ens18" (zuerst check ip a wie es heißt)

neutron_external_interface: "ens19" (check ip a, oder neues erstellen - achtung Inet Adress)

kolla_internal_vip_address: "10.140.0.71" (gleich wie ip address von network_interface)

enable_haproxy: "no"


````bash
kolla-ansible -i ./all-in-one bootstrap-servers
kolla-ansible -i ./all-in-one prechecks
kolla-ansible -i ./all-in-one deploy

pip install python-openstackclient -c https://releases.openstack.org/constraints/upper/master

kolla-ansible post-deploy
````


> Note: erster Command ``kolla-ansible -i ./all-in-one bootstrap-servers`` führt zu einem Password required fail. Nach Venv Stopp und Restart funktioniert das Command. Dann einmal sudo rennen lassen und Passwort eingeben, danach geht es offensichtlich


Copy the generated ``clouds.yaml`` file

```bash
cp -r /etc/kolla/clouds.yaml /etc/openstack
```

Create example networks, images and stuff

```bash
~/venv/share/kolla-ansible/init-runonce
```

Dashboard runs under given kolla_internal_vip_address ip -> 10.140.0.71

Login Credentials are ``admin`` and password can be found in `clouds.yaml`.

To run openstack CLI commands first use source command to set authentication. Achtung: Im virtual Environment!
````bash
source /etc/kolla/admin-openrc.sh
openstack server list
openstack service show keystone
````


::: tip summary
VM Prerequisites
* 2 network interfaces with ip addresses
* 8GB main memory
* > 40 GB disk space
* Ubuntu 22.04 installed
:::







