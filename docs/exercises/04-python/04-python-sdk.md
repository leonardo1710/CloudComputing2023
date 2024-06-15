---
lang: de-DE
title: 04.2 Arbeitsauftrag - OpenStack und Python SDK
sidebar: auto
---

# {{ $frontmatter.title }}

Die OpenStackSDK ist eine umfassende Python Bibliothek (Library), die es Entwickler*innen ermöglicht, auf einfache Weise über Programmcode mit verschiedenen OpenStack-Diensten zu interagieren. Sie bietet eine einheitliche und konsistente API (Application Programming Interface), um auf die vielfältigen Funktionen von OpenStack zuzugreifen und diese zu verwalten. 
Die SDK ermöglicht eine Vielzahl von Automatisierungen in einer OpenStack-Umgebung. Automatisierte Bereitstellung von:
* Instanzen (VMs)
* Netzwerke (inkl. Subnetzen und Routern)
* Storage
* Skalierung (Erstellung mehrerer Ressourcen)
* und vieles mehr

## Integration der OpenStackSDK in ein Python Projekt
Um die OpenStackSDK in einem Python Projekt nutzen zu können, muss diese zuerst installiert werden. In Python Projekten, werden Dependencies (zB notwendige Bibliotheken) mithilfe eines `requirements.txt` Files verwaltet. Erstellt hierzu ein `requirements.txt` File in eurem Python Projekt und fügt die OpenStackSDK Bibliothek hinzu:

``` requirements.txt
openstacksdk==3.1.0
```

`3.1.0` gibt die zu verwendende Version der Bibliothek an. Danach installiert die Bibliothek mithilfe von `pip` (Python Package Installer). Ihr könnt die CMD direkt über VS Code nutzen:

``` CMD
pip install -r requirements.txt
```

Dann erstellt ein neues Python Script, in dem ihr die Bibliothek importiert:

``` mypython.py
# Import Openstack Libary
import openstack

# Now you can use library related stuff in your script
```

::: warning Fehlermeldungen
Sollte bei der Installation von openstacksdk folgender Fehler auftreten `openstacksdk error: Microsoft Visual C++ 14.0 or greater is required.` muss womöglich die Windows SDK aktualisiert werden (https://visualstudio.microsoft.com/de/visual-cpp-build-tools/)
Siehe die zweite Antwort in folgendem Stackoverflow Issue: https://stackoverflow.com/questions/73969269/error-could-not-build-wheels-for-hnswlib-which-is-required-to-install-pyprojec
:::

Folgendes Python Skript demonstriert, wie man mit der OpenStackSDK eine Verbindung zur OpenStack-Umgebung herstellt und verschiedene Ressourcen innerhalb eines bestimmten Projekts abfragt. Probiert das Skript mit euren Credentials aus:

``` Python
# Retrieve OpenStack credentials from environment variables
auth_args = {
    'auth_url': 'http://77.237.53.196/identity',  # our server address where openstack is running
    'username': <your_username>,                       # change to your username
    'password': <your_password>,                       # change to your password
    'project_name': 'test-project',                    # shared project
    'user_domain_name': 'default',
    'project_domain_name': 'default'
}

# Initialize connection
conn = openstack.connection.Connection(**auth_args)

# Query instances in the project
instances = conn.compute.servers()
for instance in instances:
    print("Instance:", instance)

# Query networks in the project
networks = conn.network.networks()
for network in networks:
    print("Network:", network)

# Query volumes in the project
volumes = conn.block_storage.volumes()
for volume in volumes:
    print("Volume:", volume)

# Query images in the project
images = conn.image.images()
for image in images:
    print("Image:", image)
```

## Aufgaben
Ziel dieser Übung ist es eine neue Instanz (VM) im privaten Netzwerk des `testproject` anzulegen. Dazu sind einige Schritte notwendig.
Um eine neue Instanz in einem Netzwerk zu erstellen, kann die SDK wie folgt verwendet werden:

``` Python
# use conn from code snippet before!!

def create_instance_in_private_network(instance_name):
    # Define server parameters
    server_params = {
        'name': instance_name,
        'flavorRef': '<FLAVOR_ID>',  # Specify the flavor ID of the instance
        'imageRef': '<IMAGE_ID>',  # Specify the image ID of the instance
        'networks': [{'uuid': '<PRIVATE_NETWORK_ID>'}]  # Specify the private network
    }

    # Create the server (instance)
    server = conn.compute.create_server(**server_params)

    print(f"Instance '{instance_name}' created successfully with ID: {server.id}")


# Usage example: create an instance with a specific (YOUR) name in the private network
create_instance_in_private_network("<your-name-instance>")
```

Zum Anlegen einer Instanz sind also eine Flavor ID, eine Image ID und die ID des privaten Netzwerks notwendig. Diese gilt es nun herauszufinden und die Funktion `create_instance_in_private_network` entsprechend anzupassen.

## 1. Netzwerk ID
Schreibe eine Funktion `get_network_id(name)`, die den Namen des Netzwerks (in unserem Fall `private`) übergeben bekommt und die ID des zugehörigen Netzwerks zurückgibt. Im folgenden Code-Snippet wird gezeigt wie alle Netzwerke des Projekts aufgelistet werden. Nutzt den Code und erweitert diesen um die Funktion zu implementieren:

``` Python
# Declare id 
private_network_id = None
# Query networks in the project
networks = conn.network.networks()
for network in networks:
    print("Network:", network)
    # TODO: find the network with corresponding name and write its id into variable private_network_id
```

Die Funktion soll wie folgt aufgerufen werden können:

``` Python
network_id = get_network_id('private')
if network_id:
    print(f"Private network found with ID: {network_id}")
else:
    print("Private network not found.")
```

## 2. Flavor ID
Als nächstes ist eine Funktion `get_flavor_id(flavor_name)` zu schreiben, die einen Flavor Namen als Parameter entgegen nimmt und die korrespondierende ID zurückliefert. Flavors können wie folgt ausgelesen werden:

``` Python
# Function to get available flavors
def get_available_flavors():
    flavors = conn.compute.flavors()
    return flavors
```

Die Funktion `get_flavor_id(flavor_name)` soll wie folgt aufgerufen werden können

``` Python
# Get flavor ID of flavor with name "m1.tiny"
flavor_id = get_flavor_id("m1.tiny")
if flavor_id:
    print(f"Flavor ID for 'm1.tiny': {flavor_id}")
else:
    print("Flavor 'm1.tiny' not found.")
```

## 3. Image ID
Schreibe zuletzt eine Funktion `get_image_id(image_name)` zu schreiben, die einen Image Namen als Parameter entgegen nimmt und die korrespondierende ID zurückliefert. Images können wie folgt ausgelesen werden:

``` Python
# Print available images
print("Available Images:")
for image in images:
    print(image)
```
Die Funktion soll wie folgt aufgerufen werden können:
``` Python
# Get image ID of image with name "cirros-0.6.2-x86_64-disk"
image_id = get_image_id("cirros-0.6.2-x86_64-disk")
if image_id:
    print(f"Image ID for 'cirros-0.6.2-x86_64-disk': {image_id}")
else:
    print("Image 'cirros-0.6.2-x86_64-disk' not found.")
```

## 4. Instanz erstellen

### Prüfen ob Instanz bereits existiert
Bevor die Funktion zur Erstellung einer Instanz fertiggestellt und aufgerufen wird, sollte eine weitere Funktion geschrieben werden, die prüft ob die Instanz bereits existiert. Das dient dazu, sicherzustellen, dass wir nicht durch mehrmaliges Ausführen unnötig viele Instanzen mit demselben Namen erstellen.

Der Funktion wird der Name der Instanz übergeben und geprüft, ob eine Compute Instanz mit diesem existiert - wenn ja, gibt die Funktion `True` zurück, wenn nein, `False`.
``` Python
# Function to check if an instance with a specific name exists
def instance_exists(instance_name):
    servers = conn.compute.servers(name=instance_name)
    for server in servers:
        if server.name == instance_name:
            return True
    return False
```

### Erstellung der Instanz
Zu guter Letzt nutzen wir die ausgelesenen IDs von zuvor zum Erstellen unserer Instanz. Adaptiert die Funktion `create_instance_in_private_network` von zuvor wie folgt:
* Die Funktion soll als Parameter einen Instanz-Namen, die Netzwerk ID, die Flavor ID und die Image ID entgegennehmen+
* Setzt die übergebenen Werte entsprechend ein
* Ruft die Funktion auf - der Name der Instanz soll wie folgt lauten: Vorname-Nachname-Instanz. zB. Leon-Freudenthaler-Instanz

Die Funktion wird wie folgt aufgerufen:
``` Python
if instance_exists("leon-freudenthaler-instanz"):
    # Usage example: create an instance with a specific name in the private network
    create_instance_in_private_network("leon-freudenthaler-instanz", flavor_id, image_id, network_id=private_network_id)
else:
    print("Instance already created.")
```

Überprüft in der Netzwerktopologie im Horizon Dashboard (oder via API), ob eure Instanz korrekt erstellt wurde.

## 5. Löschen von Instanzen
::: warning Achtung
Mehrmaliges aufrufen der Funktion führt zur Erstellung mehrerer VMs! Solltet ihr die Funktion mehrmals aufgerufen haben, ohne mit der `instance_exists` Funktion von zuvor das mehrmalige Erstellen zu verhindern, löscht zu viel erstellte Instanzen bitte wieder mit der untenstehenden Funktion (die Instanz IDs können auch aus dem Horizon Dashboard ausgelesen werden).
:::

``` Python
# Function to delete an instance by ID
def delete_instance(instance_id):
    try:
        conn.compute.delete_server(instance_id)
        print(f"Instance with ID '{instance_id}' deleted successfully.")
    except Exception as e:
        print(f"An error occurred while deleting instance with ID '{instance_id}': {e}")

# Usage example: delete instance with ID 'INSTANCE_ID'
instance_id = 'INSTANCE_ID'  # Replace 'INSTANCE_ID' with the actual instance ID
delete_instance(instance_id)
```

## Zusammenfassung
Während dieser Übung haben wir einige Funktionen der OpenStack SDK für Python zur programmatischen Verwaltung von Cloud-Ressourcen erkundet. Hier die wichtigsten Punkte:

### Integration der OpenStack SDK
**1. Installation und Einrichtung des SDK:** Wir haben gelernt, wie man das OpenStack SDK in einem Python-Projekt mithilfe der ``requirements.txt``-Datei und des pip-Paketinstallers installiert und einrichtet. Diese Einrichtung ist entscheidend, um OpenStack-Funktionalitäten in Python-Skripts zu integrieren.

**2. Verbindung herstellen:** Wir haben eine Verbindung zur OpenStack-Umgebung hergestellt, indem wir die Verbindung mit der Methode ``openstack.connection.Connection`` initialisiert haben.

### Ressourcenmanagement
**3. Abfragen von Ressourcen:** Mit der SDK haben wir verschiedene Ressourcen wie Instanzen, Netzwerke, Volumes und Images innerhalb eines Projekts ausgelesen.

**4. Erstellen von Instanzen:** Wir haben eine Funktion implementiert, um eine neue Instanz (VM) in einem privaten Netzwerk zu erstellen. Dabei wurden Serverparameter wie Flavor-ID, Image-ID und Netzwerk-ID angegeben und die Methode ``conn.compute.create_server`` verwendet, um die Instanz zu erstellen.

**5. Abrufen von Ressourcen-IDs:** Wir haben Funktionen geschrieben, um die IDs bestimmter Ressourcen (Netzwerke, Flavors und Images) anhand ihrer Namen abzurufen. Dies zeigt, wie man Ressourcen dynamisch basierend auf ihren Attributen filtert und identifiziert.

### Workflow
**6. Workflow zur Erstellung von Instanzen:** Wir haben alle erlernten Konzepte kombiniert, um einen Workflow zu erstellen, der:
* Überprüft, ob eine Instanz mit einem bestimmten Namen bereits existiert.
* Die notwendigen Ressourcen-IDs abruft.
* Eine neue Instanz im angegebenen Netzwerk erstellt.
* Sicherstellt, dass keine doppelten Instanzen erstellt werden.