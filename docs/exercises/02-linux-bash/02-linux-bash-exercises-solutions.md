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
  
## Aufgaben

1. **Navigieren im Dateisystem:**
   - Wechsle in das Home-Verzeichnis:
   ```bash
   cd ~
   ```
   - Wechsle in das Verzeichnis `/etc`:
   ```bash
   cd /var/log
   ```
   - Gehe zurück zum vorherigen Verzeichnis:
   ```bash
   cd -
   ```
   - Navigiere zum Home-Verzeichnis des aktuellen Benutzers:
   ```bash
   cd $HOME
   ```

2. **Auflisten von Verzeichnisinhalten:**
   - Liste die Inhalte des Home-Verzeichnisses auf:
   ```bash
   ls ~
   ```
   - Zeige alle versteckten Dateien und Verzeichnisse im aktuellen Verzeichnis an:
   ```bash
   ls -a
   ```

3. **Dateiverwaltung:**
   - Erstelle ein Verzeichnis namens `test_dir` im Home-Verzeichnis:
   ```bash
   mkdir ~/test_dir
   ```
   - Erstelle eine Datei namens `file1.txt` im Verzeichnis `test_dir`:
   ```bash
   touch ~/test_dir/file1.txt
   ```
   - Kopiere die Datei `file1.txt` nach `/tmp`:
   ```bash
   cp ~/test_dir/file1.txt /tmp/
   ```
   - Verschiebe die Datei `file1.txt` zurück in das Home-Verzeichnis und benenne sie in `file2.txt` um:
   ```bash
   mv /tmp/file1.txt ~/file2.txt
   ```
   - Lösche das Verzeichnis `test_dir` und alle seine Inhalte:
   ```bash
   rm -r ~/test_dir
   ```
4. **Dateiinhalte anzeigen und bearbeiten:**

   - Zeige den Inhalt der Datei ``/etc/passwd`` an.
   ```bash
   cat /etc/passwd
   ```
   - Suche nach dem Benutzer root in der Datei ``/etc/passwd``.
   ```bash
   grep root /etc/passwd
   ```
   - Erstelle eine neue Datei mit dem Namen ``notes.txt`` und füge einige Notizen hinzu.
   ```bash
   touch notes.txt
   echo "Hier sind einige Notizen." > notes.txt
   echo "Dies ist die zweite Zeile der Notizen." >> notes.txt
   echo "Noch eine weitere Notizzeile." >> notes.txt
   ```
   - Suche nach einem bestimmten Begriff in der Datei ``notes.txt``.
   ```bash
   grep "Notizzeile" notes.txt
   ```

5. **Suchen von Dateien und Verzeichnissen:**
   - Finde den Speicherort der Datei `bash`:
   ```bash
   whereis bash
   ```
   - Finde die Datei `notes.txt` im Home-Verzeichnis:
   ```bash
   find ~ -name notes.txt
   ```
6. **Bash-Befehle und Variablen:**
   - Zeige die Liste der zuletzt verwendeten Befehle an:
   ```bash
   history
   ```
   - Erstelle eine Umgebungsvariable namens ``MY_VAR`` und weise ihr einen Wert zu:
   ```bash
   MY_VAR="mein_wert"
   ```
   - Gib den Wert der Variable ``MY_VAR`` aus:
   ```bash
   echo $MY_VAR
   ```
   - Zeige alle Umgebungsvariablen an:
   ```bash
   env
   ```
   - Lösche die Umgebungsvariable ``MY_VAR``:
   ```bash
   unset MY_VAR
   ```
7. **Informationen über Befehle:**
   - Finde heraus, wo sich der Befehl `ls` befindet:
   ```bash
   which ls
   ```
   - Zeige die Handbuchseite für den Befehl `cp` an:
   ```bash
   man cp
   ```
   - Zeige die Hilfe für den Befehl `grep` an:
   ```bash
   grep --help
   ```

8. **Protokolldateien anzeigen:**
   - Zeige den Inhalt der Datei `/var/log/syslog` an:
   ```bash
   cat /var/log/syslog
   ```
   - Zeige die letzten 10 Zeilen der Datei `/var/log/syslog` an:
   ```bash
   tail /var/log/syslog
   ```
   - Zeige die ersten 5 Zeilen der Datei `/var/log/syslog` an:
   ```bash
   head -n 5 /var/log/syslog
   ```

9. **Filtern von Inhalten:**
   - Finde alle Zeilen in der Datei `/var/log/syslog`, die den Begriff "error" enthalten:
   ```bash
   grep error /var/log/syslog
   ```
   - Ersetze in der Datei `notes.txt` alle Vorkommen von "foo" durch "bar" mithilfe eines Commands:
   ```bash
   sed -i 's/foo/bar/g' ~/notes.txt
   ```

10. **Umleitung von Eingaben und Ausgaben:**
    - Leite die Ausgabe des Befehls `ls` in eine Datei namens `notes.txt` um:
    ```bash
    ls > notes.txt
    ```
    - Füge die Ausgabe des Befehls `ls -la` am Ende der Datei `notes.txt` an:
    ```bash
    ls -la >> notes.txt
    ```

11. **Verwendung von Pipelines:**
    - Zähle die Anzahl der Zeilen im Verzeichnis `/var/log`, die das Wort "error" enthalten, indem du `grep` und `wc` verwendest:
    ```bash
    grep -r error /var/log | wc -l
    ```

12. **Dateien bearbeiten:**
    - Öffne und bearbeite die Datei `notes.txt` mit `nano`:
    ```bash
    nano ~/notes.txt
    ```
    - Öffne und bearbeite die Datei `notes.txt` mit `vim`:
    ```bash
    vim ~/notes.txt
    ```
13. **Datei- und Verzeichnisberechtigungen:**
    - Ändere die Gruppe der Datei `notes.txt` auf `sudo`:
    ```bash
    sudo chgrp sudo ~/notes.txt
    ```
    - Setze die Berechtigungen der Datei `notes.txt` so, dass nur der Besitzer lesen und schreiben kann:
    ```bash
    chmod 600 ~/notes.txt
    ```

14. **Prozessverwaltung:**
    - Zeige alle laufenden Prozesse an:
    ```bash
    ps aux
    ```

15. **Netzwerk und Konnektivität:**
    - Zeige die Netzwerkverbindungen an:
    ```bash
    netstat -tuln
    ```
    - Pinge eine externe IP Adresse deiner Wahl an:
    ```bash
    ping 8.8.8.8
    ```
    - Überprüfe die Erreichbarkeit einer bestimmten Website:
    ```bash
    curl -I https://www.orf.at
    ```
16. **Shell Skripting:**
    - Erstelle ein kleines Shell-Skript, das die Anzahl der Dateien in einem übergebenen Verzeichnis zählt:
    - Skript erstellen:
    ``` bash
    touch count_files.sh
    ```
    - Inhalt vom Skript:
    ``` count_files.sh
    #!/bin/bash
    # Skript zur Zählung der Dateien in einem Verzeichnis

    if [ -d "$1" ]; then
      count=$(ls -1A "$1" | wc -l)
      echo "Anzahl der Dateien im Verzeichnis $1: $count"
    else
      echo "Das angegebene Verzeichnis existiert nicht."
    fi
    ```
    - Skript Berechtigungen und Ausführung:
    ```bash
    chmod +x count_files.sh
    ./count_files.sh /path/to/directory
    ```