---
prev:
  text: 'Overview'
  link: '/getting_started/overview.md'

next:
  text: 'Remove from Linux'
  link: 'getting_started/uninstall_from_linux.md'
---

# Install Docker on Linux

Sequential command list to install Docker on Linux

## System update & upgrade

To update your Linux system apply the following commands sequentially.

```shell
sudo apt update
sudo apt upgrade
```

sudo apt update updates the package index of available software packages while sudo apt upgrade upgrades all currently installed packages on a Debian-based Linux system to their latest available versions. These commands should be run periodically to keep the system up-to-date.

## Install Docker

To install Docker apply the following command.

```shell
sudo apt install docker.io
```

This command will install the Docker container runtime on your Debian-based Linux system. It will allow you to package applications with all their dependencies into a portable container that can run on any machine with Docker installed. This command is necessary before creating and deploying Docker containers on your system.

To check your Docker version apply the following command.

```shell
docker version
# or
docker --version
```

## Install Docker Compose

To install Docker Compose apply the following command.

```shell
sudo apt install docker-compose
```

This command will install Docker Compose on your Debian-based Linux system. Docker Compose is a tool used to define and run multi-container Docker applications. It will allow you to describe the services that make up an application in a single configuration file and run them together in an isolated environment. Running this command is necessary before using Docker Compose to manage and deploy multi-container Docker applications.

To check your Docker Compose version apply the following command.

```shell
docker-compose version
# or
docker-compose --version
```

## Set Permission

To set user permission apply the following command sequentially.

```shell
sudo usermod -aG docker $(whoami)
```

This command will add the current user to the docker group on your Debian-based Linux system. The docker group provides permission to manage Docker containers without using `sudo` commands every time. Running this command is necessary to avoid permission errors while managing Docker containers, and to use Docker more efficiently on the system.

```shell
# (recommended) Set permission for root and group 
sudo chmod 660 /var/run/docker.sock
# or 
# Set permission for root , group and users 
sudo chmod 666 /var/run/docker.sock
```

This command will change the permissions of the Docker daemon socket file on your Linux system to allow any user to read and write to it. The Docker daemon socket file is used by Docker clients to communicate with the Docker daemon running on the system. Changing the permissions of this file is necessary to allow non-root users to use the Docker CLI and manage Docker containers.

However, this command can be a security risk as it allows any user to access the Docker daemon and should only be used in development or testing environments. In production environments, it’s recommended to use more secure methods for managing Docker containers.

After following all these steps it is better to restart your Linux system.
