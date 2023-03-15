---
prev:
  text: 'Hello World Example'
  link: 'examples/hello_world.md'

next: 
  text: 'Playlists'
  link: 'resources/playlist.md'
---

# Docker “ubuntu” example

A simple example to understand docker

## Overview

In this blog, we will explore how to use Docker to run and manage Ubuntu containers. This blog provides practical examples and step-by-step instructions for creating, starting, stopping and managing Ubuntu containers with Docker.

## Pull `ubuntu` Image

```shell
docker pull ubuntu:latest
```

This command will pull the latest version of the ubuntuimage from the Docker Hub registry. Once the image is downloaded, it can be used to create and run Docker containers based on Ubuntu.

```shell
docker images
```

This command will show you all the Docker images that are currently available on the local system. This provides information such as the repository name, tag and image ID for each image.

## Create ‘ubuntu’ Container

```shell
docker run -it -d --name cbox ubuntu:latest
```

This command will create and start a new Container using the `ubuntu:latest` image and set name `cbox` to the container. The `-it` flag enables an interactive terminal for the container. Again, the `-d` flag runs the container in detached mode (in the background). This means that you can interact with the container using a terminal and it will continue to run even after the terminal session ends.

```shell
docker ps
# or
docker ps -a
```

This command will show you all the Docker containers that are currently running on the local system. By default, it only shows the active containers but you can use additional flags to show all containers, including those that are not running such as `-a`. This command provides information such as the container ID, image name and container status etc.

## Start and Stop Container

Apply the following commands sequentially to understand the starting and stopping process of containers.

```shell
docker ps
docker stop cbox
docker ps
docker start cbox
```

The first docker pscommand lists all the currently running containers on the local system.

The docker stop `cbox` command stops the Docker container named `cbox`. This command sends a signal to the container to gracefully stop any processes running inside the container and then terminate the container.

The second `docker ps` command lists all the running containers on the local system again and now the `cbox` container should no longer be listed since it was stopped in the previous step.

The docker start `cbox` command starts the previously stopped container named `cbox` again. This command sends a signal to the container to start any processes that were running inside the container when it was last stopped.

## Apply Linux Command Inside Container

To apply some Linux commands on your ubuntu Container you must start the respective Container.

```shell
docker exec cbox  ls
docker exec cbox  whoami
```

The `docker exec` command is used to run a command inside a running container. In both of these examples, the `cbox` container is specified as the target container to run the commands in.

The `ls` command is a standard Unix command used to list the files and directories in the current directory. In this case, it lists the files and directories in the current directory inside the `cbox` container.

The `whoami` command is a standard Unix command used to display the username of the currently logged-in user. In this case, it displays the username of the user running the command inside the `cbox` container.

## Apply Continuous Linux Command Inside Container

To try regular Linux commands inside an interactive terminal apply the following command.

```shell
docker exec -it cbox sh
```

The `docker exec` command is used to run a command inside a running container. In this example, the `-it` flag enables an interactive terminal for the container and `sh` is specified as the command to run inside the `cbox` container.

By running this command, you will get a shell inside the running container, allowing you to interact with it in the same way you would interact with a regular Linux shell. From here, you can run any commands that are available in the container and explore its file system, install software and perform other administrative tasks. Once you are finished with the shell, you can exit it by typing `exit` or pressing `Ctrl+D`.

```shell
# Try some linux command
ls
whoami
apt update
apt upgrade

# After finishing your work apply following command to exit
exit
```

After applying your commands you should stop the container using following command.

```shell
docker stop cbox
```
