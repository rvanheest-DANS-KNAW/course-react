Presentatie dinsdagochtend - Introductie React
==============================================


easy-deposit-ui current state
-----------------------------
* home page (temp)
* login page
* deposit overview
* deposit form


project structure
-----------------
* build
    * package.json + package-lock.json
    * tsconfig.json
    * webpack (base|dev|prod).config.json
    * pom.xml
    * .travis.yml
* main
    * html/index.html
    * resources
        * /css
        * /img
        * /constants
        * /application.json
    * application main setup
        * client.tsx
        * components/Header.tsx
        * components/Footer.tsx
        * Routes.tsx
    * pages
        * components/home/HomePage.tsx
        * components/login/LoginPage.tsx
        * components/overview/DepositOverviewPage.tsx
            * NewDepositButton
            * DepositOverview
            * DepositTableHead
            * DepositTableRow
        * components/form/DepositFormPage.tsx
* test/typescript
    * lib
    * mockserver


example 1: header and footer
----------------------------

###Header
content related stuff in `Header.render`
structural stuff in 'library' components to avoid code duplication

###Footer
highlight Bootstrap classes

* grid
* responsive design


example 2: routing
------------------

* `Footer.tsx` contains routing information
* `constants/clientRoutes` contains the exact route paths, since they're shared by multiple parts of the code
* `PrivateRoute` checks whether the user is authenticated
* `depositFormRoute` uses parameter in path, which is fetched in `DepositFormPage.tsx`


example 3: `DepositOverviewPage`
--------------------------------

* functional component
* fragment (`<>...</>`)
* split into multiple components (button, table, table_header, table_row)
* render by combining private methods


toelichting op de hackathon
--------------------------

* Pairprogramming
* Kleine issues oplossen
* http://bit.ly/react-deposit-ui
