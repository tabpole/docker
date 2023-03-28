import{_ as s,c as e,o as n,d as a}from"./app.fbd27f83.js";const y=JSON.parse('{"title":"Install Docker on Linux","description":"","frontmatter":{"prev":{"text":"Overview","link":"/getting_started/overview.md"},"next":{"text":"Remove from Linux","link":"getting_started/uninstall_from_linux.md"}},"headers":[{"level":2,"title":"System update & upgrade","slug":"system-update-upgrade","link":"#system-update-upgrade","children":[]},{"level":2,"title":"Install Docker","slug":"install-docker","link":"#install-docker","children":[]},{"level":2,"title":"Install Docker Compose","slug":"install-docker-compose","link":"#install-docker-compose","children":[]},{"level":2,"title":"Set Permission","slug":"set-permission","link":"#set-permission","children":[]}],"relativePath":"getting_started/install_on_linux.md","lastUpdated":1678877664000}'),l={name:"getting_started/install_on_linux.md"},o=a(`<h1 id="install-docker-on-linux" tabindex="-1">Install Docker on Linux <a class="header-anchor" href="#install-docker-on-linux" aria-hidden="true">#</a></h1><p>Sequential command list to install Docker on Linux</p><h2 id="system-update-upgrade" tabindex="-1">System update &amp; upgrade <a class="header-anchor" href="#system-update-upgrade" aria-hidden="true">#</a></h2><p>To update your Linux system apply the following commands sequentially.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>sudo apt update updates the package index of available software packages while sudo apt upgrade upgrades all currently installed packages on a Debian-based Linux system to their latest available versions. These commands should be run periodically to keep the system up-to-date.</p><h2 id="install-docker" tabindex="-1">Install Docker <a class="header-anchor" href="#install-docker" aria-hidden="true">#</a></h2><p>To install Docker apply the following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker.io</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will install the Docker container runtime on your Debian-based Linux system. It will allow you to package applications with all their dependencies into a portable container that can run on any machine with Docker installed. This command is necessary before creating and deploying Docker containers on your system.</p><p>To check your Docker version apply the following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="install-docker-compose" tabindex="-1">Install Docker Compose <a class="header-anchor" href="#install-docker-compose" aria-hidden="true">#</a></h2><p>To install Docker Compose apply the following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-compose</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will install Docker Compose on your Debian-based Linux system. Docker Compose is a tool used to define and run multi-container Docker applications. It will allow you to describe the services that make up an application in a single configuration file and run them together in an isolated environment. Running this command is necessary before using Docker Compose to manage and deploy multi-container Docker applications.</p><p>To check your Docker Compose version apply the following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="set-permission" tabindex="-1">Set Permission <a class="header-anchor" href="#set-permission" aria-hidden="true">#</a></h2><p>To set user permission apply the following command sequentially.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">usermod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-aG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">whoami</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will add the current user to the docker group on your Debian-based Linux system. The docker group provides permission to manage Docker containers without using <code>sudo</code> commands every time. Running this command is necessary to avoid permission errors while managing Docker containers, and to use Docker more efficiently on the system.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># (recommended) Set permission for root and group </span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">660</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/docker.sock</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Set permission for root , group and users </span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">666</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/docker.sock</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This command will change the permissions of the Docker daemon socket file on your Linux system to allow any user to read and write to it. The Docker daemon socket file is used by Docker clients to communicate with the Docker daemon running on the system. Changing the permissions of this file is necessary to allow non-root users to use the Docker CLI and manage Docker containers.</p><p>However, this command can be a security risk as it allows any user to access the Docker daemon and should only be used in development or testing environments. In production environments, it’s recommended to use more secure methods for managing Docker containers.</p><p>After following all these steps it is better to restart your Linux system.</p>`,26),t=[o];function p(i,r,c,d,m,u){return n(),e("div",null,t)}const C=s(l,[["render",p]]);export{y as __pageData,C as default};
