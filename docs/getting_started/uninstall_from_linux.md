---
prev:
  text: 'Install on Linux'
  link: 'getting_started/install_on_linux.md'

next:
  text: 'Docker Image'
  link: 'concepts/image.md'
---

# Completely uninstall Docker from Linux

Sequential steps to remove Docker from Linux system

## Checking Package

```shell
dpkg -l
```

This command is being used to list all installed packages and their respective versions. It will help you to quickly view the status of installed packages and can be useful for troubleshooting or determining dependencies between packages.

```shell
dpkg -l | grep -i docker
```

This command displays a list of installed packages containing the word "docker" (case-insensitive) in their names or descriptions. This command can help you quickly identify the specific version of installed Docker packages and verify their status.

## Remove Docker Resources

```shell
sudo docker volume prune -f
sudo docker network prune -f
sudo docker container prune -f
sudo docker image prune -a
```

The commands `volume prune` , `network prune` , `container prune` and `image prune` are used to free up disk space in Docker-based systems by removing unused volumes, networks, containers, and images respectively. These commands remove unnecessary resources from the system which optimizes system performance and improves overall efficiency. The `-f` option is used to force the removal of these resources without prompting for confirmation.

## Uninstall Docker

```shell
sudo apt purge docker.io
# or
sudo apt remove docker.io
```

This command removes the docker package. The command `remove` removes the package binaries but its configuration files and installed dependencies will remain in the system. The command `purge` removes the package as well as its configuration files. But the dependencies will remain in the system. So, it is recommended to use `purge` command to uninstall docker completely.

## Uninstall Docker Compose

```shell
sudo apt purge docker-compose
# or
sudo apt remove docker-compose
```

This command will remove `docker-compose` package from your Linux system. The command `remove` removes the package binaries but its configuration files and installed dependencies will remain in the system. The command `purge` removes the package as well as its configuration files. But the dependencies will remain in the system. So, it is recommended to use `purge` command to uninstall docker completely.

## Remove Docker Group

```shell
sudo groupdel docker
```

This command will delete docker group from your Linux system.

## Clean Unnecessary Dependencies

```shell
sudo apt autoremove
```

This command removes packages installed as dependencies for other packages but no longer needed. This helps to free up disk space and keep the system clean.

```shell
sudo apt autoclean
```

This command removes obsolete package files, freeing up disk space and optimizing system performance.

Finally, you should restart your system and chill for while.
