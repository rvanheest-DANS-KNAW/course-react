Presentatie dinsdagochtend - Introductie Redux
==============================================


easy-deposit-ui current state
-----------------------------
brief reminder of how easy-deposit-ui looks

* home page (temp)
* login page
* deposit overview
* deposit form


project structure
-----------------
* build
    * package.json
        * (dev)dependencies betreffende Redux
* main
    * client.tsx
    * store definition
    * TODO walk through Components, actions, constants, model/store, reducers, middleware
    * logger middleware


example 1: toggle foldable cards
--------------------------------

### Register/unregister card
* TODO

### Toggle card opened/closed
* TODO


example 2: deposit overview
---------------------------

### Deposit table

#### Fetch table data
* TODO

#### Delete table row
* TODO

#### Clean table on unmount
* TODO

### New deposit
* call to action creator for creating new deposit
* promise middleware dispatches `*_PENDING`, `*_FULFILLED` and `*_REJECTED` events
* middleware for causing routing
* reducer updates 'create-new-deposit' state (success/failure)


example 3: routing
------------------

* dispatch event that causes routing to take place


example 4: deposit form
-----------------------

* fields connected to Redux via redux-form
* show event log + store states


toelichting op de hackathon
---------------------------

TODO

* Pairprogramming
* Kleine issues oplossen
* http://bit.ly/react-deposit-ui
