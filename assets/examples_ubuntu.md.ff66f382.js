import{_ as n,c as e,o as s,d as a}from"./app.fbd27f83.js";const y=JSON.parse('{"title":"Docker “ubuntu” example","description":"","frontmatter":{"prev":{"text":"Hello World Example","link":"examples/hello_world.md"},"next":{"text":"Playlists","link":"resources/playlist.md"}},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Pull ubuntu Image","slug":"pull-ubuntu-image","link":"#pull-ubuntu-image","children":[]},{"level":2,"title":"Create ‘ubuntu’ Container","slug":"create-ubuntu-container","link":"#create-ubuntu-container","children":[]},{"level":2,"title":"Start and Stop Container","slug":"start-and-stop-container","link":"#start-and-stop-container","children":[]},{"level":2,"title":"Apply Linux Command Inside Container","slug":"apply-linux-command-inside-container","link":"#apply-linux-command-inside-container","children":[]},{"level":2,"title":"Apply Continuous Linux Command Inside Container","slug":"apply-continuous-linux-command-inside-container","link":"#apply-continuous-linux-command-inside-container","children":[]}],"relativePath":"examples/ubuntu.md","lastUpdated":1678877664000}'),l={name:"examples/ubuntu.md"},o=a(`<h1 id="docker-ubuntu-example" tabindex="-1">Docker “ubuntu” example <a class="header-anchor" href="#docker-ubuntu-example" aria-hidden="true">#</a></h1><p>A simple example to understand docker</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>In this blog, we will explore how to use Docker to run and manage Ubuntu containers. This blog provides practical examples and step-by-step instructions for creating, starting, stopping and managing Ubuntu containers with Docker.</p><h2 id="pull-ubuntu-image" tabindex="-1">Pull <code>ubuntu</code> Image <a class="header-anchor" href="#pull-ubuntu-image" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu:latest</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will pull the latest version of the ubuntuimage from the Docker Hub registry. Once the image is downloaded, it can be used to create and run Docker containers based on Ubuntu.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">images</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will show you all the Docker images that are currently available on the local system. This provides information such as the repository name, tag and image ID for each image.</p><h2 id="create-ubuntu-container" tabindex="-1">Create ‘ubuntu’ Container <a class="header-anchor" href="#create-ubuntu-container" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu:latest</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will create and start a new Container using the <code>ubuntu:latest</code> image and set name <code>cbox</code> to the container. The <code>-it</code> flag enables an interactive terminal for the container. Again, the <code>-d</code> flag runs the container in detached mode (in the background). This means that you can interact with the container using a terminal and it will continue to run even after the terminal session ends.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This command will show you all the Docker containers that are currently running on the local system. By default, it only shows the active containers but you can use additional flags to show all containers, including those that are not running such as <code>-a</code>. This command provides information such as the container ID, image name and container status etc.</p><h2 id="start-and-stop-container" tabindex="-1">Start and Stop Container <a class="header-anchor" href="#start-and-stop-container" aria-hidden="true">#</a></h2><p>Apply the following commands sequentially to understand the starting and stopping process of containers.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The first docker pscommand lists all the currently running containers on the local system.</p><p>The docker stop <code>cbox</code> command stops the Docker container named <code>cbox</code>. This command sends a signal to the container to gracefully stop any processes running inside the container and then terminate the container.</p><p>The second <code>docker ps</code> command lists all the running containers on the local system again and now the <code>cbox</code> container should no longer be listed since it was stopped in the previous step.</p><p>The docker start <code>cbox</code> command starts the previously stopped container named <code>cbox</code> again. This command sends a signal to the container to start any processes that were running inside the container when it was last stopped.</p><h2 id="apply-linux-command-inside-container" tabindex="-1">Apply Linux Command Inside Container <a class="header-anchor" href="#apply-linux-command-inside-container" aria-hidden="true">#</a></h2><p>To apply some Linux commands on your ubuntu Container you must start the respective Container.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">whoami</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The <code>docker exec</code> command is used to run a command inside a running container. In both of these examples, the <code>cbox</code> container is specified as the target container to run the commands in.</p><p>The <code>ls</code> command is a standard Unix command used to list the files and directories in the current directory. In this case, it lists the files and directories in the current directory inside the <code>cbox</code> container.</p><p>The <code>whoami</code> command is a standard Unix command used to display the username of the currently logged-in user. In this case, it displays the username of the user running the command inside the <code>cbox</code> container.</p><h2 id="apply-continuous-linux-command-inside-container" tabindex="-1">Apply Continuous Linux Command Inside Container <a class="header-anchor" href="#apply-continuous-linux-command-inside-container" aria-hidden="true">#</a></h2><p>To try regular Linux commands inside an interactive terminal apply the following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The <code>docker exec</code> command is used to run a command inside a running container. In this example, the <code>-it</code> flag enables an interactive terminal for the container and <code>sh</code> is specified as the command to run inside the <code>cbox</code> container.</p><p>By running this command, you will get a shell inside the running container, allowing you to interact with it in the same way you would interact with a regular Linux shell. From here, you can run any commands that are available in the container and explore its file system, install software and perform other administrative tasks. Once you are finished with the shell, you can exit it by typing <code>exit</code> or pressing <code>Ctrl+D</code>.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Try some linux command</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span></span>
<span class="line"><span style="color:#FFCB6B;">whoami</span></span>
<span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># After finishing your work apply following command to exit</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>After applying your commands you should stop the container using following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cbox</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,35),t=[o];function i(r,p,c,d,u,h){return s(),e("div",null,t)}const b=n(l,[["render",i]]);export{y as __pageData,b as default};
