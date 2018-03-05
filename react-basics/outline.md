React basics
============

This module contains a demonstration of basic React usage. No prior knowledge of React is assumed.


Agenda
------
* A brief walk through the various parts of a React project structure.
* Demo of basic React syntax
* Properties
* State


Project structure
-----------------
* Every NodeJS project contains a **`package.json`** file that contains
    * the name, a description and SCM related information about the project
    * script shortcuts
    * a list of dependencies
* When running `npm install` for the first time, a **`package-lock.json`** file is generated. **DON'T EDIT THIS FILE!**
  This file contains the exact dependencies that the project uses. It is therefore important to commit this file, such
  that all contributors of the project use the same dependency versions. When new dependencies are installed, this file
  will be automatically updated/regenerated.
* For TypeScript projects, a **`tsconfig.json`** file is included. This file contains configuration specific to how the
  TypeScript compiler is to behave and which level of strictness is expected.
* The **`/webpack`** folder contains all Webpack configuration. This project contains two configurations:
  development (**`dev.config.js`**) and production (**`prod.config.js`**), both sharing a number of settings in
  **`base.config.js`**. These settings include the application's entry point(s), file extensions to be resolved and
  build configurations.
* A very basic HTML page is contained in **`src/main/html/index.html`**. This contains a `header` with all necessary
  details, such as `title`, `meta` elements and `link`s to external CSS and/or JavaScript libraries, such as Bootstrap
  or MaterializeCSS.  The HTML's `body` element only contains a `<div id="app"></div>`. This is where React will in the
  end put the generated HTML. Please note that this HTML file does not contain references to our own JavaScript or CSS.
  This is later injected by Webpack.
* Styling and other resources (images, etc.) will be put into **`src/main/resources/`**. Please note that in order for
  these files to be used, they must be referenced by the (Java|Type)Script sources.
* **`src/main/typescript/index.tsx`** is the root of the application's code. This file makes sure that our custom CSS is
  linked to the application (`import "../resources/css/styling"`) and that the generated HTML is put into the `#app`
  inside the HTML.


React basic syntax
------------------
TODO


Properties
----------
TODO


State
-----
TODO
