---
lang: de-DE
title: 03 Installation und Setup OpenStack
sidebar: auto
next:
text: 'OpenStack Components'
link: '/exercises/02-openstack/02-openstack-components'
---

# {{ $frontmatter.title }}
> Note: Grundlage des Arbeitsauftrags ist die [OpenStack Documentation](https://docs.openstack.org/2023.1/)

[OpenStack](https://www.openstack.org/) ist die beliebteste Open-Source-Cloud-Plattform, die verteilte Rechen-, Netzwerk- und Speicherressourcen im Rechenzentrum zusammenfasst und die bedarfsgerechte Bereitstellung virtueller Maschinen über ein Self-Service-Portal ermöglicht. 
OpenStack ist die beliebteste Open-Source-Cloud-Plattform, die große Pools von Rechen-, Speicher- und Netzwerkressourcen in einem Rechenzentrum steuert, welche über APIs mit gemeinsamen Authentifizierungsmechanismen verwaltet und bereitgestellt werden.
Zur Bereitstellung und Steuerung der Services kann auch über ein Self-Service-Portal (Web Dashboard) genutzt werden.
Über die Standardfunktionalität von Infrastructure-as-a-Service hinaus bieten zusätzliche Komponenten unter anderem Orchestrierung, Fehlermanagement und Servicemanagement, um eine hohe Verfügbarkeit der Benutzeranwendungen zu gewährleisten.
OpenStack betreibt tausende von öffentlichen und privaten Clouds auf der ganzen Welt.


![OpenStack Overview](./img/openstack_2023.svg)
*OpenStack Überblick.* [Source](https://www.openstack.org/)


OpenStack besteht aus mehreren Kernkomponenten und [Services](https://www.openstack.org/software/project-navigator/openstack-components/#openstack-services), die je nach Bedürfnis individuell zusammengestellt und verwendet werden können.
Das untenstehende Diagramm zeigt die verfügbaren Services von OpenStack und wie diese zusammenspielen.

**OpenStack Grundkomponenten:**

* **OpenStack Services** stellen API-Endpunkte bereit und bieten grundlegende Cloud-Funktionen wie die Pflege des Image-Katalogs, die Bereitstellung und Verwaltung von Instanzen usw.

* **OpenStack Dashboard** stellt ein webbasiertes User Interface zur Verwendung von OpenStack Services bereit.

* **OpenStack Client** stellt ein Command-line User Interface zur Verwendung von OpenStack Services bereit.

* **SQL Databases** speichert verschiedenste Datensätze, die von OpenStack Services benötigt werden.

* **Message queues** erleichtern die Inter-Prozess-Kommunikation zwischen den verschiedenen Komponenten der OpenStack Services.

Zusätzliche Komponenten, wie **NoSQL-Datenbanken** oder **memcached**, können in fortgeschritteneren Szenarien erforderlich sein.



![OpenStack Map](./img/openstack-map.png)
*OpenStack Services.* [Source](https://www.openstack.org/software/)

## Was ist Devstack?
[DevStack](https://opendev.org/openstack/devstack) ist eine Reihe von individuell annpassbaren Scripts, die verwendet werden, um schnell eine komplette OpenStack-Umgebung zu erstellen.
Zur Installation von Devstack wird die neueste Versionen mithilfe von [Git](https://git-scm.com/) verwendet. 
Es wird interaktiv als Entwicklungsumgebung und als Grundlage für einen Großteil der Funktionstests des OpenStack-Projekts verwendet.

## Ziele von Devstack
* Schnelle und einfache Erstellung und Aufsetzen einer Development Umgebung für Openstack in Ubuntu oder Fedora
* Beschreibung funktionierender Konfigurationen von OpenStack (welche Code-Zweige arbeiten zusammen? wie sehen die Konfigurationsdateien für diese Zweige aus?) -> Opensource Development
* Entwickler:innen den Einstieg in OpenStack zu erleichtern, damit sie produktiv mitarbeiten können, ohne jeden Teil des Systems auf einmal verstehen zu müssen
* Einfaches Erstellen von Prototypen für projektübergreifende Funktionen

::: warning
Devstack installiert und deinstalliert Applikationen in seiner Entwicklungsumgebung, es sollte deshalb immer nur in einem gekapselten System ausgeführt werden. Am sinnvollsten ist es Devstack in einer virtuellen Maschine isoliert zu installieren.
:::

## Installation von DevStack

**Systemvoraussetzungen:**
* Memory 8GB
* Cores 2 (besser 4)
* HDD 64GB
* Ubuntu 22.04
* SSH Server (optional)

### DevStack User anlegen
::: warning Hinweis
Alle folgende Commands müssen auf der Zielmaschine (VM) ausgeführt werden. Z.B. via SSH
::: 

DevStack sollte als Non-Root-User mit aktiviertem ``sudo`` ausgeführt werden.
Zur Erstellung eines Users ``stack`` mit dem DevStack operiert wird:

````shell
$ sudo useradd -s /bin/bash -d /opt/stack -m stack
````

Im nächsten Schritt sicherstellen, dass der ``stack`` User über alle Ausführungsrechte verfügt, da RHEL-basierte Distributionen Services mit 750 erstellen, was zu Problemen beim Deployment führen kann. 
> Info: Berechtigungen in Linux können unter folgendem [Link](https://www.guru99.com/file-permissions.html) nachgeschlagen werden. 750 bedeutet, dass der User read-write und execution Berechtigungen hat (4 + 2 + 1), und die Usergruppe über read und execution Berechtigungen verfügt (4 + 1).
````shell
$ sudo chmod +x /opt/stack
````

Weiters müssen ``sudo`` Rechte vergeben werden, da der User einige Änderungen am System vornehmen wird. Mit dem zweiten Command loggen wir uns als `stack` User ein.
````shell
$ echo "stack ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/stack
$ sudo -u stack -i
````

### Download von DevStack
Bereitgestellt wird der Sourcecode von DevStack über GIT, aus diesem Grund ist eine Installation von GIT in der VM notwendig:
````shell
$ sudo apt-get install git-core
````

Danach wird der Sourcecode via GIT heruntergeladen und in das neu erstellte Directory navigiert. Das ``devstack`` Directory beinhaltet ein Script, welches OpenStack installiert, und Konfigurationsfiles.
````shell
$ git clone https://opendev.org/openstack/devstack
$ cd devstack
````
Im nächsten Schritt wird ein ``local.conf`` File erstellt, falls es nicht existiert:

````shell
$ touch local.conf
$ ls
$ nano local.conf
````

Anschließend wird das Konfigurationsfile mit Root Passwörtern befüllt:
::: danger Achtung
    Es dürfen nur alphanumerische Zeichen in den Passwörtern verwendet werden!
::: 
````local.conf
[[local|localrc]]
ADMIN_PASSWORD=secret
DATABASE_PASSWORD=$ADMIN_PASSWORD
RABBIT_PASSWORD=$ADMIN_PASSWORD
SERVICE_PASSWORD=$ADMIN_PASSWORD
````

### Installation starten
Zur Installation wird das zur Verfügung gestellte ``stack.sh`` Script verwendet. Die Installation dauert ~ 15 bi 20 Minuten:
````shell
$ ./stack.sh
````

Wenn die Installation erfolgreich war, sollte das OpenStack Dashboard über die IP Adresse der VM wie folg abrufbar sein (Achtung: bitte verwendet euren VPN Zugang zur VM): ``http://<DEINE_IP_ADDRESSE>``

![Dashboard](./img/openstack_dashboard.png)
*OpenStack Dashboard*

Die Anmeldedaten des Dashboards sind Username ``admin`` und das zuvor vergebene Passwort (`local.conf`).

::: tip Hinweis 
Solltet ihr eure SSH Verbindung zischenzeitlich schließen, müsst ihr euch wieder mit dem ``stack`` User anmelden um Änderungen vornehmen zu können: `sudo -u stack -i`.
:::

Weiters ist es möglich mithilfe eines CLI mit dem Openstack Environment zu interagieren:
````shell
# source openrc file to load your environment with OpenStack CLI creds
$ . openrc
# list instances
$ openstack server list
````