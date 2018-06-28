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
    * walk through Components, actions, constants, model/store, reducers, middleware
    * logger middleware


example 1: toggle foldable cards
--------------------------------

`FoldableCard` is used a number of times in `DepositForm`

### 1.1 Register/unregister card
* `registerCard` in constructor to make sure Redux knows about this particular instance of `FoldableCard`
* `registerCard` found in props
* connected to Redux in `connect` statement
* dispatched action from `foldableCardActions`
* merging state with action in `foldableCardReducer`
* state object described in `FoldableCards`
* discuss mutable vs. immutable state

`unregisterCard` goes in the same way

### 1.2 Toggle card opened/closed
* `toggleCard` called as `onClick` action via `collapseCard` in `FoldableCard`
* dispatched action from `foldableCardActions`
* merging state with action in `foldableCardReducer`

### 1.3 Separation model/view
* View (React) doesn't know about the model
* Redux has model in the store and uses action creators to communicate between the two


example 2: routing
------------------

* dispatch action that causes routing to take place


example 3: deposit overview
---------------------------

### 3.1 Deposit table

#### 3.1.1 Middleware usage
Middleware used for all kinds of things:

* logging
* resolving promise (fetch/Axios)
* converting external model to internal model
* split action into multiple actions
* <general> side effects

#### 3.1.2 Fetch table data
* dispatch action `fetchDeposits` on `componentDidMount`
* clean up store on `componentWillUnmount` using `cleanDeposits`
* in action creator the deposits are fetched
    * discuss async-await syntax
* promise middleware resolves `Promise` and dispatches `XXX_PENDING`, `XXX_FULFILLED` and `XXX_REJECTED`
* `FETCH_DEPOSITS_FULFILLED` is used in `depositMiddleware` to convert external to internal model, which dispatches `FETCH_DEPOSITS_SUCCESS` containing the internal model
* `FETCH_DEPOSITS_SUCCESS` is reduced in `depositOverviewReducer`
* `rejectedRequestMiddleware` -> calls `fetchDepositsFailed`

#### 3.1.3 Delete table row
* when garbage button clicked in UI, dispatch `deleteDeposit` action
* in action, see `meta` field
* reducer removes `Deposit` object from list, which causes rerender of the table

#### 3.1.4 Clean table on unmount
* clean up table when moving to another screen

### 3.2 New deposit
* call to action creator for creating new deposit
* promise middleware dispatches `*_PENDING`, `*_FULFILLED` and `*_REJECTED` events
* middleware for causing routing
* reducer updates 'create-new-deposit' state (success/failure)


example 4: deposit form
-----------------------

* fields connected to Redux via redux-form
* show event log + store states


discussion
----------

* When to use 'local state' vs. Redux
    * Always use Redux?
    * Situations in which you would use local state?


toelichting op de hackathon
---------------------------

* Pairprogramming
* Kleine issues oplossen
* http://bit.ly/redux-deposit-ui
