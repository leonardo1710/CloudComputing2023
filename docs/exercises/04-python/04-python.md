---
lang: de-DE
title: 04 Arbeitsauftrag - Python
sidebar: auto
---

# {{ $frontmatter.title }}

## Prerequisites
* Installation von [Visual Studio Code](https://code.visualstudio.com/download)
* Einrichten von Python und VS Code: [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python/python-tutorial)
  * Download [Python3](https://www.python.org/downloads/) - **Achtung:** Pythonvariable zum Pfad hinzufügen auswählen!
  * VS Code [Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
* Python Projekt in VS Code anlegen
  * Folge der [Anleitung](https://code.visualstudio.com/docs/python/python-tutorial) von zuvor
  * Testen, ob alles korrekt konfiguriert und installiert ist: ein simples Programm ausführen (siehe Anleitung)


## Aufgabenstellung
## 1. Printing und Variablen
  1. Schreibe ein Programm, das folgenden Text in der Console ausgibt:
  ``` Console
  Row, row, row your boat,
  Gently down the stream.
  Merrily, merrily, merrily, merrily,
  Life is but a dream.
  ```
  2. Gib das Ergebnis der Multiplikation `2*2` in der Konsole wie folgt aus:
  ``` Console
  the result = 4
  ```
  3. Schreibe ein Programm, dass `print("Hello there!")` in der Konsole ausgibt.
  4. Adaptiere folgendes Code-Snippet soweit, dass sowohl die Berechnung als auch das Ergebnis in einer Zeile in der Konsole ausgegeben werden
  ``` Python
  # Fix the code
  print(5)
  print(" + ")
  print(8)
  print(" - ")
  print(4)
  print(" = ")
  print(5 + 8 - 4)
  ```
## 2. User Input
  1. Schreibe ein Programm, dass einen Usernamen einliest und dann zweimal geteilt durch `!` ausgibt:
  ``` Console
  What is your name? >> Leon
  !Leon!Leon!
  ``` 
  2. Schreibe ein Programm, dass zwei Zahlen vom User einliest und die Summe der Zahlen in der Konsole ausgibt:
  ``` Console
  Number A: >> 10
  Number B: >> 5
  The sum is 15.
  ```
## 3. Arithmetische Operationen und Konditionen
  1. Schreibe ein Programm, dass eine Anzahl von Tagen vom User einliest. Das Programm soll dann die Anzahl von Sekunden dieser Tage ausgeben:
  ``` Console
  How many days? >> 7
  Seconds in that many days: >> 604800
  ```
  2. Schreibe ein Programm, dass 4 Zahlen vom User einliest. Danach soll die Summe und der Durchschnitt der Zahlen ausgegeben werden:
  ``` Console
  Number 1: >> 2
  Number 2: >> 1
  Number 3: >> 6
  Number 4: >> 7
  The sum of the numbers is 16 and the mean is 4.0
  ```
  3. Schreibe ein Programm, das zwei Zahlen vom User einliest und ausgibt, welche Zahl größer ist:
  ``` Console
  Please type in the first number: >> 5
  Please type in another number: >> 3
  The greater number was: 5

  Please type in the first number: >> 5
  Please type in another number: >> 8
  The greater number was: 8

  Please type in the first number: >> 5
  Please type in another number: >> 5
  The numbers are equal!
  ```
  4. Schreibe ein Programm, dass einen Namen vom User einliest. Ist der Name Tick, Trick und Track, soll das Programm erkennen, dass es sich um einen Neffen von Donald Duck handelt:
  ``` Console
  Please type in your name: >> Huey
  I think you might be one of Donald Duck's nephews.
  
  Please type in your name: >> Ken
  You're not a nephew of any character I know of.
  ```
  5. Schreibe ein Programm, das den Benutzer nach einer ganzzahligen Zahl fragt. 
  Wenn die Zahl durch drei teilbar ist, soll das Programm Fizz ausgeben. 
  Wenn die Zahl durch fünf teilbar ist, soll das Programm Buzz ausgeben. 
  Wenn die Zahl sowohl durch drei als auch durch fünf teilbar ist, soll das Programm FizzBuzz ausgeben:
  ``` Console
  Number: >> 9
  Fizz
  
  Number: >> 7
  
  Number: >> 20
  Buzz
  
  Number: >> 45
  FizzBuzz
  ```
## 4. Schleifen
  1. Schreibe ein Programm, das die Nachricht „hello world!" ausgibt und auf eine Usereingabe wartet. Der User kann das Programm mit Eingabe von "no" beenden. Andernfalls wird nochmals hello world ausgegeben:
  ``` Console
  hello world!
  shall we continue? >> yes
  hello world!
  shall we continue? >> oui
  hello world!
  shall we continue? >> jawohl
  hello world!
  shall we continue? >> no
  okay then stop
  ```
  2. Folgendes Programm sollte einen Countdown ausgeben. Derzeit funktioniert das Code-Snippet noch nicht so wie geplant. Fixe den Fehler:
  ``` Python
  # Fix the code
  number = 5
  print("Countdown!")
  while True:
    print(number)
    number = number - 1
    if number > 0:
      break

  print("Now!")
  ```
  3. Schreibe ein Programm, das den Benutzer immer wieder nach Wörtern fragt. Wenn der Benutzer „end“ eingibt, soll das Programm die Geschichte, die aus den Wörtern entstanden ist, in der Konsole ausgeben und das Programm beenden:
  ``` Console
  Please type in a word: >> Once
  Please type in a word: >> upon
  Please type in a word: >> a
  Please type in a word: >> time
  Please type in a word: >> there
  Please type in a word: >> was
  Please type in a word: >> a
  Please type in a word: >> girl
  Please type in a word: >> end
  Once upon a time there was a girl
  ```
  4. Ändere das Programm von zuvor so ab, dass das Programm auch beendet wird, wenn der User dasselbe Wort zweimal nacheinander eingibt.
  5. Schreibe ein Programm, das den Benutzer nach Gleitkommazahlen fragt. Das Programm sollte so lange nach Zahlen fragen, bis der Benutzer 0 oder eine negative Zahl eingibt. Das Programm soll dann die größte Zahl ausgeben. Wenn die erste eingegebene Zahl kleiner oder gleich 0 ist, soll das Programm abbrechen und „no number entered“ ausgeben.
  **Zur Lösung der Aufgaben sollen keine Listen verwendet werden!**
  Beispiel:
  ``` Console
  Number 1: >> 3
  Number 2: >> 4.67
  Number 3: >> 120.5
  Number 4: >> 70
  Number 5: >> 0
  The largest number is 120.5
  
  Number 1: >> -1.11
  No number entered.
  ```
## 5. Funktionen
  1. Schreibe eine Funktion ``print_hello()``, die "Hello, World!" auf der Konsole ausgibt. Die Funktion hat keinen Rückgabewert und keine Übergabeparameter.
  2. Schreibe eine Funktion ``greet(name)``, die eine Begrüßung für den übergebenen Namen auf der Konsole ausgibt.
  3. Schreibe eine Funktion ``add(a, b)``, die zwei Zahlen addiert und das Ergebnis als Rückgabewert zurückgibt.
  4. Schreibe eine Funktion ``is_even(number)``, die überprüft, ob eine Zahl gerade ist. Die Funktion soll True zurückgeben, wenn die Zahl gerade ist, und False, wenn die Zahl ungerade ist.
  5. Schreibe eine Funktion ``grade(score)``, die eine Note basierend auf der Punktzahl score zurückgibt. Verwende folgende Notenskala:
  90 <= score <= 100: A
  80 <= score < 90: B
  70 <= score < 80: C
  60 <= score < 70: D
  score < 60: F
  6. Schreibe eine Funktion ``is_leap_year(year)``, die überprüft, ob ein Jahr ein Schaltjahr ist. Die Funktion soll True zurückgeben, wenn das Jahr ein Schaltjahr ist, und False andernfalls. Ein Jahr ist ein Schaltjahr, wenn es durch 4 teilbar ist, aber nicht durch 100, außer es ist durch 400 teilbar.

## 6. Listen
  1. Erstelle eine Liste mit dem Inhalt der Zahlen 1 bis 5 und gib die Liste auf der Konsole aus.
  2. Erstelle eine Liste mit den Zahlen 1 bis 4 und füge die Zahl 5 am Ende der Liste hinzu. Gib die Liste danach in der Konsole aus.
  3. Erstelle eine Liste mit den Wochentagen und gib den ersten und den letzten Tag auf der Konsole aus.
  4. Erstelle eine Liste mit den Zahlen 1 bis 10 und gib die Länge der Liste auf der Konsole aus.
  5. Erstelle eine Liste mit den Zahlen 1 bis 5 und berechne die Summe der Elemente in der Liste. Gib die Summe in der Konsole aus.
  6. Erstelle eine Liste mit den Zahlen 4, 2, 9, 1, 5 und finde das Maximum und Minimum der Liste. Drucke die Ergebnisse auf der Konsole aus.
  7. Erstelle für die Aufgabe von zuvor eine Funktion, welche eine Liste als Parameter entgegennimmt und das Maximum und Minimum als Tuple zurückgibt.
  8. Schreibe eine Funktion `interpolate(list)` welche eine Liste aus Zahlen als Übergabeparameter entgegennimmt. Erstelle eine neue Liste, die jeden einzelnen Wert der übergebenen Liste quadriert speichert. Die neue Liste soll aus der Funktion zurückgegeben werden.
  
      Bsp.: ``interpolate([1, 2, 3, 4])`` gibt ``[1, 4, 9, 16]`` zurück.

## 7. Python Scripting mit der OpenStack SDK (Software Development Kit)
Die OpenStackSDK ist eine umfassende Python Bibliothek (Library), die es Entwickler*innen ermöglicht, auf einfache Weise über Programmcode mit verschiedenen OpenStack-Diensten zu interagieren. Sie bietet eine einheitliche und konsistente API (Application Programming Interface), um auf die vielfältigen Funktionen von OpenStack zuzugreifen und diese zu verwalten. 
Die SDK ermöglicht eine Vielzahl von Automatisierungen in einer OpenStack-Umgebung. Automatisierte Bereitstellung von:
* Instanzen (VMs)
* Netzwerke (inkl. Subnetzen und Routern)
* Storage
* Skalierung (Erstellung mehrerer Ressourcen)
* und vieles mehr

### Integration der OpenStackSDK in ein Python Projekt
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
    'project_name': <your_project_name>,          # change to your project name
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
