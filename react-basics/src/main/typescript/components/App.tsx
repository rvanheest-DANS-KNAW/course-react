import * as React from "react"
import { Component } from "react"
import Header from "./Header"
import ShoppingList from "./ShoppingList"
import { Item } from "../model/Item"
import Form from "./Form"

interface AppState {
    items: Item[]
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = { items: [] }
    }

    addItem = (value: string) => {
        this.setState(prevState => ({ ...prevState, items: [...prevState.items, new Item(value)] }))
    }

    render() {
        return (
            <div>
                <Header>Hello!</Header>
                <ShoppingList items={this.state.items}/>
                <Form onSubmit={this.addItem}/>
            </div>
        )
    }
}

export default App
