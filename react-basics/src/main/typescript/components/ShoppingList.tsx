import * as React from "react"
import { Component } from "react"
import { Item } from "../model/Item"
import ShoppingListItem from "./ShoppingListItem"

interface ShoppingListProps {
    items: Item[]
}

class ShoppingList extends Component<ShoppingListProps> {
    constructor(props: ShoppingListProps) {
        super(props)
    }

    render() {
        const isEmpty = this.props.items.length == 0
        const shoppingList = isEmpty
            ? <div/>
            : <ul className="collection">
                {this.props.items.map(item => <ShoppingListItem key={item.id}>{item.value}</ShoppingListItem>)}
            </ul>

        return shoppingList
    }
}

export default ShoppingList
