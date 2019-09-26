import React, {Component} from 'react'
import Hero from './Hero'
import Game from './Game'

export default class Catalog extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
    <div className="Catalog">
      Catalog
      <Hero />
      <Game />
    </div>
    )
  }
}