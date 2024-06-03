---
lang: de-DE
title: 02 Linux Bash
sidebar: auto
---

# {{ $frontmatter.title }}

## Lernziele der Exercise
In dieser Übungseinheit werdet ihr mit der Linux-Befehlszeilenschnittstelle in einer Ubuntu-Virtual Machine (VM) arbeiten. Ziel ist es, euer Verständnis für grundlegende Linux-Befehle zu vertiefen und zu lernen, wie man Probleme durch Trial and Error löst und dabei selbstständig im Internet nach Lösungsansätzen sucht. Hier sind ein paar Tipps für die Bearbeitung der Aufgaben:

**Ausprobieren erwünscht:**
  * Experimentiert ruhig mit den verschiedenen Befehlen und Optionen. Ihr werdet dadurch ein besseres Gefühl dafür bekommen, wie die Befehle funktionieren und welche Auswirkungen sie auf das System haben.

**Selbstständig recherchieren:**
  * Nutzt das Internet, um Lösungen für die gestellten Aufgaben zu finden. Sucht nach Dokumentationen, Tutorials, Foren oder Blogs, um Hilfestellung zu bekommen. Das eigenständige Suchen und Ausprobieren von Lösungsansätzen ist ein wichtiger Teil des Lernprozesses.

**Learning Diary führen:**
  * Schreibt während der Bearbeitung der Aufgaben ein "Learning Diary" oder eine Art Lerntagebuch. Notiert euch eure Gedanken, Beobachtungen, Schwierigkeiten und Lösungsansätze. Das Tagebuch wird euch nicht nur dabei helfen, die Aufgaben besser zu verstehen, sondern auch als Referenz für zukünftige Problemlösungen dienen.

**Gemeinsam lernen:**
  * Zögert nicht, euch gegenseitig zu helfen und Fragen zu stellen. Teilt eure Lösungsansätze und diskutiert eure Erfahrungen mit euren Mitstudierenden. Der Austausch von Wissen und Erfahrungen kann dabei helfen, verschiedene Perspektiven zu verstehen und neue Lösungswege zu entdecken.

**Lernziel im Blick behalten:**
  * Das Hauptziel dieser Übung ist es, eure Fähigkeiten im Umgang mit der Linux-Befehlszeilenschnittstelle zu verbessern und euch zu zeigen, wie ihr selbstständig nach Lösungen sucht und sie anwendet. Durch das aktive Experimentieren, Recherchieren und Dokumentieren werdet ihr nicht nur die gestellten Aufgaben lösen, sondern auch ein tieferes Verständnis für das Betriebssystem Linux entwickeln.

## Prerequisites
1. Aufgaben sind auf der zur Verfügung gestellten VM auszuführen
2. Verbinde dich via SSH zur VM: 77.237.53.201 Port:22
3. Anmeldedaten: Username und Passwort aus dem Portal
  

## Aufgaben mit Lösungen

1. **Navigieren im Dateisystem:**
   - Wechsle in das Home-Verzeichnis
   - Wechsle in das Verzeichnis `/etc`
   - Gehe zurück zum vorherigen Verzeichnis
   - Navigiere zum Home-Verzeichnis des aktuellen Benutzers

2. **Auflisten von Verzeichnisinhalten:**
   - Liste die Inhalte des Home-Verzeichnisses auf
   - Zeige alle versteckten Dateien und Verzeichnisse im aktuellen Verzeichnis an

3. **Dateiverwaltung:**
   - Erstelle ein Verzeichnis namens `test_dir` im Home-Verzeichnis
   - Erstelle eine Datei namens `file1.txt` im Verzeichnis `test_dir`
   - Kopiere die Datei `file1.txt` nach `/tmp`
   - Verschiebe die Datei `file1.txt` zurück in das Home-Verzeichnis und benenne sie in `file2.txt` um
   - Lösche das Verzeichnis `test_dir` und alle seine Inhalte
  
4. **Dateiinhalte anzeigen und bearbeiten:**

   - Zeige den Inhalt der Datei ``/etc/passwd`` an.
   - Suche nach dem Benutzer root in der Datei ``/etc/passwd``.
   - Erstelle eine neue Datei mit dem Namen ``notes.txt`` und füge einige Notizen hinzu.
   - Suche nach einem bestimmten Begriff in der Datei ``notes.txt``.

5. **Suchen von Dateien und Verzeichnissen:**
   - Finde den Speicherort der Datei `bash`
   - Finde die Datei `notes.txt` im Home-Verzeichnis
  
6. **Bash-Befehle und Variablen:**
   - Zeige die Liste der zuletzt verwendeten Befehle an
   - Erstelle eine Umgebungsvariable namens ``MY_VAR`` und weise ihr einen Wert zu
   - Gib den Wert der Variable ``MY_VAR`` aus
   - Zeige alle Umgebungsvariablen an
   - Lösche die Umgebungsvariable ``MY_VAR``
7. **Informationen über Befehle:**
   - Finde heraus, wo sich der Befehl `ls` befindet
   - Zeige die Handbuchseite für den Befehl `cp` an
   - Zeige die Hilfe für den Befehl `grep` an

8. **Protokolldateien anzeigen:**
   - Zeige den Inhalt der Datei `/var/log/syslog` an
   - Zeige die letzten 10 Zeilen der Datei `/var/log/syslog` an
   - Zeige die ersten 5 Zeilen der Datei `/var/log/syslog` an

9. **Filtern von Inhalten:**
   - Finde alle Zeilen in der Datei `/var/log/syslog`, die den Begriff "error" enthalten
   - Ersetze in der Datei `notes.txt` alle Vorkommen von "foo" durch "bar" mithilfe eines Commands

10. **Umleitung von Eingaben und Ausgaben:**
    - Leite die Ausgabe des Befehls `ls` in eine Datei namens `notes.txt` um
    - Füge die Ausgabe des Befehls `ls -la` am Ende der Datei `notes.txt` an

11. **Verwendung von Pipelines:**
    - Zähle die Anzahl der Zeilen im Verzeichnis `/var/log`, die das Wort "error" enthalten, indem du `grep` und `wc` verwendest

12. **Dateien bearbeiten:**
    - Öffne und bearbeite die Datei `notes.txt` mit `nano`
    - Öffne und bearbeite die Datei `notes.txt` mit `vim`

13. **Datei- und Verzeichnisberechtigungen:**
    - Ändere die Gruppe der Datei `notes.txt` auf `sudo`
    - Setze die Berechtigungen der Datei `notes.txt` so, dass nur der Besitzer lesen und schreiben kann

14. **Prozessverwaltung:**
    - Zeige alle laufenden Prozesse an

15. **Netzwerk und Konnektivität:**
    - Zeige die Netzwerkverbindungen an
    - Pinge eine externe IP Adresse deiner Wahl an
    - Überprüfe die Erreichbarkeit einer bestimmten Website
16. **Shell Skripting:**
    - Erstelle ein kleines Shell-Skript, das die Anzahl der Dateien in einem übergebenen Verzeichnis zählt:
    