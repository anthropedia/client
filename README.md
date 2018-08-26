# RiotJS skeleton

This is an opinionated skeleton of a simple yet powerful [RiotJS](http://riot.js.org/) app.
It has minimalism in mind.

[RiotJS](http://riot.js.org/) is a reactive web-components library [that is lite (10Kb)](https://riot.js.org/compare/#3x-bigger), flexible that carries minimalism.


## Bootstrap your project

```
git clone https://github.com/vinyll/riot-skeleton myapp
cd myapp
npm install
```

And adapt the _src/components_ files.

Some sugar has been added:

- `request()`: a global function wrapping _fetch_ for calling APIs. Returns a JSON content when available, text otherwise.

## Commands

- `npm start`: run the server and watch for files change. Perfect for development.
- `npm run watch`: watch for any component file change in _src/components_ and rebuild into _dist/components.js_.
- `npm build`: build the components for production into _dist/components.js_


## Tree structure

```
dist/ # compiled files
  components.js # compiled Riot tags
src/  # source files
  components/ # Riot tags
    app.html  # the riot entrypoint tag
    home.html # a demo home page
    welcome.html  # a demo second page
    error404.html # displays when a URL is not found
  js/ # source JS files
    vendors/    # 3rd party JS libs
index.html  # the app entry point
```


## Opinionated

- Compilation is made simple via npm command line into a single file
- Routing is based on [Page.js](https://github.com/visionmedia/page.js)
- Riot files use `.html` extension
- 3rd party libs files are installed with _npm_ and symlinked to /src/vendors/
- Default styles with [mini.css](https://minicss.org) as minimalist CSS framework
