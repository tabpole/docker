import{_ as e,c as a,o as n,d as r}from"./app.7d942c16.js";const _=JSON.parse('{"title":"Docker Image vs Docker Container","description":"","frontmatter":{},"headers":[],"relativePath":"concepts/image_vs_container.md","lastUpdated":1678867778000}'),t={name:"concepts/image_vs_container.md"},o=r('<h1 id="docker-image-vs-docker-container" tabindex="-1">Docker Image vs Docker Container <a class="header-anchor" href="#docker-image-vs-docker-container" aria-hidden="true">#</a></h1><p>The key differences between Docker Image and Docker Container are :</p><p><strong>Purpose</strong>: A Docker image is a pre-packaged, standalone and portable executable file that contains all the necessary files, libraries and dependencies required to run an application. A Docker container, on the other hand, is an executable instance of a Docker image that can be started, stopped and modified while running.</p><p><strong>Mutability</strong>: Docker images are read-only and cannot be modified while Docker containers are mutable and can be modified while running.</p><p><strong>Lifecycle</strong>: Docker images have a longer lifecycle than Docker containers. Images are built and stored in a registry while containers are created, started, stopped and deleted as needed.</p><p><strong>Storage</strong>: Docker images are stored in a registry and can be easily shared and distributed. Docker containers are stored on the local machine and are isolated from each other and from the host system.</p><p><strong>Size</strong>: Docker images are generally larger in size than Docker containers as they contain all the necessary files and dependencies required to run an application.</p><p>In summary, Docker images provide a consistent and reproducible way to package and distribute applications, while Docker containers provide a secure and isolated runtime environment for running those applications.</p>',8),i=[o];function s(c,d,p,l,g,h){return n(),a("div",null,i)}const k=e(t,[["render",s]]);export{_ as __pageData,k as default};
