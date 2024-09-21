import React, { Component } from 'react'
import { Players } from './Share/ListOfPlayers'
import ContentPresentation from './ContentPresentation'

export default class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            players: Players
        }
    }
    render() {
        return (
            <>
                <ContentPresentation playerData={this.state.players} />
            </>
        )
    }
}
