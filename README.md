# Docker Handbook

A simple and short Docker guideline.

## Website

To visit the website [click here](https://tabpole.github.io/docker/).

## How to run on local machine

Step 1: Clone repository

```bash
    git clone git@github.com:tabpole/docker-handbook.git
```

Step 2: npm dependencies

```bash
    npm install
```

Step 3: run documentation site on browser

```bash
    npm run docs:dev
```

Other Commands :

```bash
    npm run docs:build
    npm run docs:preview
```

## Contribution commands

To make a contribution fork this repository then apply following commands and make a pull request to main branch.

Sequential commands:

```bash  
    git add .
    git commit -m 'appropriate message'
    git pull origin main
    git push origin main
```

## Move dist files into 'site' branch

Sequential commands

```bash
    git checkout site
    rm -rf  !("node_modules"|"docs"|".gitignore")
    cp -rf docs/.vitepress/dist/* .
    git add .
    git commit -m 'deployment'
    git pull origin site
    git push origin site
    git checkout main
```

Others commands :

```bash
    git checkout main docs/.vitepress/dist
```

## Build tool

This documentation site is built using [vitepress](https://vitepress.vuejs.org).
