import Text from "components/text"
import React, { Component } from "react"

export default class History extends Component {
  getHistory = () => {
    const history = localStorage.getItem("history")

    if (history) {
      const data = JSON.parse(history)
      return data.map((item) => {
        return (
          <div>
            <Text text={item} />
            <br />
          </div>
        )
      })
    } else {
      return <Text text="Not Found History" />
    }
  }

  render() {
    return (
      <div>
        <Text text="History" />
        {this.getHistory()}
      </div>
    )
  }
}
