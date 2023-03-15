---
prev:
  text: 'Docker Container'
  link: 'concepts/container.md'

next:
  text: 'Docker Volume'
  link: 'concepts/volume.md'
---

# Docker Image vs Docker Container

The key differences between Docker Image and Docker Container are :

**Purpose**: A Docker image is a pre-packaged, standalone and portable executable file that contains all the necessary files, libraries and dependencies required to run an application. A Docker container, on the other hand, is an executable instance of a Docker image that can be started, stopped and modified while running.

**Mutability**: Docker images are read-only and cannot be modified while Docker containers are mutable and can be modified while running.

**Lifecycle**: Docker images have a longer lifecycle than Docker containers. Images are built and stored in a registry while containers are created, started, stopped and deleted as needed.

**Storage**: Docker images are stored in a registry and can be easily shared and distributed. Docker containers are stored on the local machine and are isolated from each other and from the host system.

**Size**: Docker images are generally larger in size than Docker containers as they contain all the necessary files and dependencies required to run an application.

In summary, Docker images provide a consistent and reproducible way to package and distribute applications, while Docker containers provide a secure and isolated runtime environment for running those applications.
