# luizglomyer.github.io

My personal website. Built with [Hugo](https://gohugo.io/) and [Blowfish](https://blowfish.page/). It uses Github Pages as the hosting service, the website is deployed everytime a new commit gets into the main branch, thanks to Github Actions. You can access the site here: https://luizglomyer.github.io


## Getting Started

To build the static files for your website, run the following command:
```bash
hugo
```

To start the development server and preview the website locally, run the following command:
```bash
hugo server -D
```

This command will build your site, parse draft files and start a local web server. You can then access your site at http://localhost:1313 in your web browser. Flags of note are: `--watch` to watch for file changes and `--bind=0.0.0.0` `--baseURL=http://0.0.0.0:1313` to expose the server in the network.

