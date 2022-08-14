import React, { Component } from "react"
import Text from "components/text"
import Button from "components/button"
import Converter from "pages/converter"
import History from "pages/history"
import { SCREEN_TYPE } from "./constants"

import "./assets/style.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenType: SCREEN_TYPE.Converter
    }
  }
  componentDidMount() {}

  renderPages = () => {
    switch (this.state.screenType) {
      case SCREEN_TYPE.History:
        return <History />
      case SCREEN_TYPE.Converter:
        return <Converter />
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Text className="app__header__title" text="Curency Converter" />
          <Text
            className="app__header__description"
            text="You can select the rate you want to convert or search by typing"
          />
        </div>
        <div className="app__buttons">
          <Button
            text="Converter"
            disabled={this.state.screenType === SCREEN_TYPE.Converter}
            onClick={() => {
              this.setState({
                screenType: SCREEN_TYPE.Converter
              })
            }}
          />
          <Button
            text="History"
            disabled={this.state.screenType === SCREEN_TYPE.History}
            onClick={() => {
              this.setState({
                screenType: SCREEN_TYPE.History
              })
            }}
          />
        </div>
        <div className="app__main">{this.renderPages()}</div>
      </div>
    )
  }
}
