Notes for React Basics demo
===========================


Project structure
-----------------
* `package.json`
* `package-lock.json`
* `tsconfig.json`
* webpack files
* `index.html`
* CSS files
* `index.tsx`


React basic syntax
------------------

    npm install --save react react-dom
    npm install --save-def @types/react @types/react-dom

* `App` class with `<h1>Hello World</h1>`
* plug into `index.tsx`


Reusable `Header` component
---------------------------

`Header.tsx`

    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo center">Hello!</a>
      </div>
    </nav>

`App.tsx`

    <Header/>


Reusable `Header` component with custom text
--------------------------------------------

`Header.tsx`

    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo center">{this.props.children}</a>
      </div>
    </nav>

`App.tsx`

    <Header>Hello!</Header>


Model shoppinglist item (`Item`)
--------------------------------

    npm install --save uuid
    npm install --save-dev @types/uuid

`Item.ts`

    import * as uuid from 'uuid/v4'

    export class Item {
        public readonly id: string
        public readonly value: string

        constructor(value: string, id: string = uuid()) {
            this.id = id
            this.value = value
        }
    }

`ShoppingListItem.tsx`

    import * as React from 'react'
    import { Component } from "react"

    class ShoppingListItem extends Component {
        render() {
            return (
                <li className='collection-item'>{this.props.children}</li>
            )
        }
    }

    export default ShoppingListItem


Properties
----------

`ShoppingList.tsx`

    import * as React from "react"
    import { Component } from "react"
    import { Item } from "../model/Item"

    interface ShoppingListProps {
        items: Item[]
    }

    class ShoppingList extends Component<ShoppingListProps> {
        constructor(props: ShoppingListProps) {
            super(props)
        }

        render() {
            return null
        }
    }

    export default ShoppingList

`App.tsx`

    return (
        <div>
            <Header>Hello!</Header>
            <ShoppingList items={[
                new Item("coffee"),
                new Item("sugar"),
                new Item("milk"),
            ]}/>
        </div>
    )

`ShoppingList.tsx`

    const isEmpty = this.props.items.length == 0
    const shoppingList = isEmpty
        ? <div/>
        : <ul className="collection">
            {this.props.items.map(item => <ShoppingListItem key={item.id}>{item.value}</ShoppingListItem>)}
        </ul>
    return shoppingList


State
-----

`Form.tsx`

    interface FormState {
        value: string
    }

    class Form extends Component<FormProps, FormState> {
        constructor(props: FormProps) {
            super(props)
            this.state = { value: "" }
        }

        render() {
            return (
                <form>
                    <div>
                        <label>Add an item</label>
                        <input type="text"
                               value={this.state.value}
                               autoFocus/>
                    </div>
                    <button className="btn waves-effect waves-light"
                            type="submit"
                            disabled={this.state.value.length === 0}>Add item...</button>
                </form>
            )
        }
    }

Add `<Form/>` to `App.tsx`

`Form.tsx`

    handleChange = (event: React.ChangeEvent<FormState>) => {
        event.preventDefault()
        this.setState({ value: event.target.value })
    }

    <input type="text"
           value={this.state.value}
           onChange={this.handleChange}
           autoFocus/>

Add state to `App.tsx`:

    interface AppState {
        items: Item[]
    }

    # in constructor
    this.state = { items: [] }

    addItem = (value: string) => {
        this.setState(prevState => ({ ...prevState, items: [...prevState.items, new Item(value)] }))
    }

    # in render
    -    <ShoppingList items={[
    -        new Item("coffee"),
    -        new Item("sugar"),
    -        new Item("milk"),
    -    ]}/>
    +    <ShoppingList items={this.state.items}/>
    +    <Form onSubmit={this.addItem}/>

Submit form:

    interface FormProps {
        onSubmit: (value: string) => void
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        this.props.onSubmit(this.state.value)
        this.setState({ value: "" })
    }

    <form onSubmit={this.handleSubmit}>
