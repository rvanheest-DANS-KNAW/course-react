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
