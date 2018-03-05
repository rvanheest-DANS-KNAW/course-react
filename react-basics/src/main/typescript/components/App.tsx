import * as React from "react"
import { Component } from "react"
import Header from "./Header"
import ShoppingList from "./ShoppingList"
import { Item } from "../model/Item"

class App extends Component {
    render() {
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
    }
}

export default App
