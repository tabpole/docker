---
prev:
  text: 'Docker Registry'
  link: 'concepts/registry.md'

next:
  text: 'Ubuntu Example'
  link: 'examples/ubuntu.md'
---

# Docker “hello-world” example

A simple example to understand docker

## Overview

Docker `hello-world` is a simple example application that demonstrates the basic functionality of Docker. It is often used as the first example when getting started with Docker to ensure that Docker is installed and running correctly on your system.

The `hello-world` application is a very simple program that prints a message to the console. When you run the Docker `hello world` example, Docker pulls a small, lightweight image from the Docker Hub registry and runs a container based on that image. The container executes the `Hello World` program and prints a message to the console.

This example is useful for understanding how Docker images and containers work, and how they can be used to package and deploy applications in a consistent and portable way.

## Checking Docker

First, ensure that Docker is installed on your system. Open a terminal or command prompt and type the following command to check that Docker is installed correctly.

```shell
docker version
```

This command will display the version number and other details of Docker if it is installed correctly.

## Pull `hello-world` Image

Next, pull the`hello-world` image from the Docker Hub registry by running the following command.

```shell
docker pull hello-world
```

This command will download the `hello-world` image from the Docker Hub registry and store it locally on your machine.

To check whether `hello-world` image has been properly downloaded or not, apply the following command.

```shell
docker images
```

This command will show you all docker images list. Among them, you will see your hello-world image from the list.

## Run `hello-world` Image

Now, run the following command to start a container based on the `hello-world` image.

```shell
docker run hello-world
```

This command will start a container, which will execute the `hello-world` program and display a message on the screen.

```none
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from 
    the Docker Hub. (amd64)
 3. The Docker daemon created a new container from that 
    image which runs the executable that produces the output
    you are currently reading.
 4. The Docker daemon streamed that output to the Docker 
    client, which sent it to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

Congratulations! You have successfully run the `hello-world` example in Docker.
