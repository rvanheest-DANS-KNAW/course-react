course-react
============

A demo of React basics. See also the [outline] for this demo.


BUILDING FROM SOURCE
--------------------

**Prerequisites:**

* NodeJS 8.9.4 or higher
* NPM 5.6.0 or higher

**Download the project:**

    git clone https://github.com/DANS-KNAW/course-react.git
    cd course-react/react-basics
    npm install

**Running dev server:**

* `npm start`
* go to [http://localhost:3000] in your favorite browser (this will automatically be done by default)

**Building for production:**

* `npm run build`
* the output can be found in `./target/build`

[outline]: outline.md
[http://localhost:3000]: http://localhost:3000

Update dependencies
-------------------

    npm install -g npm-check-updates
    ncu -u
    npm install
