---
lang: de-DE
title: 02 Installation und Setup OpenStack
sidebar: auto
next:
  text: 'OpenStack Components'
  link: '/exercises/02-openstack/02-openstack-components'
---

# {{ $frontmatter.title }}
> Note: Dieser Arbeitsauftrag basiert auf [OpenStack Tutorials](https://ubuntu.com/openstack/tutorials)

OpenStack ist die beliebteste Open-Source-Cloud-Plattform, die verteilte Rechen-, Netzwerk- und Speicherressourcen im Rechenzentrum zusammenfasst und die bedarfsgerechte Bereitstellung virtueller Maschinen über ein Self-Service-Portal ermöglicht. OpenStack betreibt tausende von öffentlichen und privaten Clouds auf der ganzen Welt.

## Was ist MicroStack?
MicroStack ist eine auf OpenStack basierende Micro-Cloud-Plattform, die für den Edge-Bereich und kleine Rechenzentren entwickelt wurde und mit minimalem Aufwand installiert und gewartet werden kann. MicroStack beseitigt die Komplexität, die hinter OpenStack steckt, und bietet einen durchdachten Ansatz für das Design der OpenStack-Architektur und eine unkomplizierte Installationsmethode. 

![OpenStack Overview](./img/openstack.svg)
*OpenStack Überblick.* [Source](https://www.freecodecamp.org/news/openstack-tutorial-operate-your-own-private-cloud/)

OpenStack besteht aus mehreren Kernkomponenten und Services, die je nach Bedürfnis individuell zusammengestellt und verwendet werden können.
Das untenstehende Diagramm zeigt die verfügbaren Services von OpenStack und wie diese zusammenspielen.
![OpenStack Map](./img/openstack-map.svg)
*OpenStack Services.* [Source](https://www.freecodecamp.org/news/openstack-tutorial-operate-your-own-private-cloud/)


## Ziele
* Installieren von OpenStack am Server
* Einrichten der ersten Instanz mit OpenStack

## Prerequisites
* Ubuntu LTS installiert (20.04 or higher)
* Multi-core CPU
* 8 GB RAM
* 100 GB Speicherplatz
* Sudo-Rechte

## Installation
[Openstack Installation](https://ubuntu.com/tutorials/install-openstack-on-your-workstation-and-launch-your-first-instance#1-overview)

Wir werden MicroStack verwenden, da es die einfachste Installationsmöglichkeit bietet. Verbindet euch zunächste mit eurem Server via SSH und führt den folgenden Befehl aus, um den Microstack-Snap zu installieren:

```bash
sudo snap install microstack --beta
```

Wenn der Installationsvorgang abgeschlossen ist, sollte folgende Meldung im Terminal angezeigt werden:
```bash
microstack (beta) ussuri from Canonical✓ installed
```

MicroStack kann entweder im Single- oder im Multi-Node Modus initialisiert werden. Folgender Command initialisiert den Single-Node Modus:

```bash
sudo microstack.init --auto --control
```

Die Ausführung des Befehls kann einige Minuten (~20) in Anspruch nehmen. Sobald er abgeschlossen ist, ist OpenStack betriebsbereit.

## Starten einer Instanz
Zum Starten eurer ersten Instanz (VM), führt folgenden Befehl aus:
```bash
microstack.launch cirros --name myInstance
```

Die resultierende Ausgabe enthält die Informationen, die für eine SSH-Verbindung zur Instanz benötigt werden:
```bash
Access it with `ssh -i /home/leon/snap/microstack/common/.ssh/id_microstack cirros@10.20.20.71`
```
> Note: euer Pfad bzw. die IP-Adresse werden sich vermutlich von der obigen unterscheiden. Bitte verwendet euren eigenen Pfad/IP für die folgenden Commands.

Um euch mit der Instanz zu verbinden, führt den folgenden Befehl in der Terminalausgabe aus. Falls ihr nach dem Passwort gefragt werdet, lautet das Standardpasswort für das CirrOS-Image `gocubsgo`.

```bash
ssh -o "PubkeyAcceptedKeyTypes +ssh-rsa" -i /home/leon/snap/microstack/common/.ssh/id_microstack cirros@10.20.20.71
```

Das war's. Nun seid ihr mit der Instanz verbunden. Jetzt können normale Shell-Befehle verwendet werden, um verschiedene Aufgaben auszuführen. Zum Beispiel könnt ihr die IP-Adresse der Instanz überprüfen, indem ihr den folgenden Befehl ausführt:

```bash
ip a
```

Das CirrOS-Image, das wir in diesem Beispiel verwendet haben, bietet nur ein minimalistisches Betriebssystem, so dass die Liste der Befehle möglicherweise begrenzt ist. Zum Beispiel können wir die Betriebszeit der Instanz überprüfen:

```bash
uptime
  11:08:36 up 2 min,  1 users,  load average: 0.05, 0.05, 0.01
```

Um die Verbindung zur Instanz zu trennen entweder ``exit`` eingeben
oder ``CTRL+D`` klicken.

### Laufende Instanzen anzeigen

Zum Anzeigen alle laufenden Instanzen, kann folgender Command verwendet werden:
```bash
microstack.openstack server list
```