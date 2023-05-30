# Helpful VirtualBox and VM Settings

## Overview

This document is a collection of helpful VirtualBox and VM settings that I have found useful.

* [Add user to sudoers](#add-user-to-sudoers)
* [Enable full screen mode](#enable-full-screen-mode)
* [Enable shared clipboard - Copy/Pasting](#enable-shared-clipboard)

<h2 id="add-user-to-sudoers">Add a user to sudoers </h2>
Change to root user:
```bash
su -
```

Add your user to sudoers:
```bash
sudo usermod -aG sudo <username>
```

Change back to your user:
```bash
su - <username>
```

<h2 id="enable-full-screen-mode"> Enable Fullscreen Mode in VirtualBox</h2>

1. Start your VirtualBox virtual machine.
2. Click on the "View" menu in the VirtualBox window.
3. Select "Switch to Fullscreen" or press the "Host" key and "F" key together. The "Host" key is typically the right "Ctrl" key on a PC keyboard or the left "Command" key on a Mac keyboard, but you can change it in the VirtualBox preferences.
4. Your virtual machine will switch to full-screen mode.
5. To exit full-screen mode, press the "Host" key and "F" key together again, or move your mouse to the top center of the screen to display the VirtualBox menu bar and select "View" > "Switch to Scaled Mode".

> Note: If the Guest Additions are not installed on your virtual machine, you may not be able to use full-screen mode. The Guest Additions provide additional functionality to the virtual machine, including better graphics performance and support for shared folders, clipboard integration, and more. 
> Make sure to install the Guest Additions by selecting "Devices" > "Insert Guest Additions CD image" from the VirtualBox menu bar. Then, follow the installation prompts on your virtual machine to install the Guest Additions.

<h2 id="enable-shared-clipboard"> Enable Copy and Paste in VirtualBox</h2>
To enable copy-pasting from your OS to your VM, you need to install the "VirtualBox Guest Additions".
You can skip this step if you already installed the "VirtualBox Guest Additions" in the previous step.

1. Install the "VirtualBox Guest Additions"
2. Restart your VM
3. Click on the "Devices" menu in the VirtualBox window.
4. Select "Shared Clipboard" and choose "Bidirectional"