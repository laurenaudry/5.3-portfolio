# FEE Boilerplate React/Bable/Webpack

## Initial Setup Gotchas with Babel and Webpack
### DO NOT DO THESE WHEN STARTING NEW PROJECTS WHEN COPYING THIS REPO
  - Install webpack `$ npm install --save-dev webpack`
  - Run `$ npm install --save-dev babel-cli`
  - Create `.babelrc` file `$ touch .babelrc`
    ```js
      {
        "presets": ["es2015"]
      }
    ```
  - Add to `scripts: {}` inside of `package.json` to specify input/output folders for babel to run
  - `$ npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react`
  - `$ npm install --save-dev react react-dom`

## Development
  - `$ npm install -g webpack`
  - `$ npm install -g babel-cli`
  - `$ npm install -g webpack-dev-server`


## Words
  - CLI - Command Line Interface - Allows us to write commands in Terminal to execute functions (this is why we use `npm install -g`)
  - Spec - is another word for a file with tests...
  - Spec Helpers - reusable code (functions) for specs...

### todo list
- [x] index page
 - [x] link other pages
 - [x] import other pages
- [x] blog page
  - [x] add title
  - [x] add one warmup post
- [x] projects page
  - [x] have a list of links/articles
  - [x] short description of at least one
- [x] Project detail route
  - [x] detailed content of the project(s) linked
  - [x] please use react-router params to render this correctly!
- [] Make sure all html content is semantic and valid
