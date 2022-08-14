import React, { Component } from "react"
import Text from "components/text"
import { convertCurrency, getSymbols } from "services/exchange"

import "./assets/style.scss"
import Select from "components/select"
import { getDateTime, symbolsToSelectOptions } from "utils"
import Button from "components/button"
import Input from "components/input"

const initialResult = "0.00"

export default class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      symbols: [],
      fromSymbol: "",
      toSymbol: "",
      amount: "",
      result: initialResult
    }
  }

  componentDidMount() {
    getSymbols().then((res) => {
      if (res.success) {
        this.setState({
          symbols: symbolsToSelectOptions(res.symbols)
        })
      } else {
        alert(res.data.message)
      }
    })
  }

  convert = (event) => {
    event.preventDefault()
    const { amount, toSymbol, fromSymbol } = this.state
    const toSymbolValue = toSymbol.value
    const fromSymbolValue = fromSymbol.value
    convertCurrency({
      amount,
      toSymbol: toSymbolValue,
      fromSymbol: fromSymbolValue
    }).then((res) => {
      if (res.success) {
        this.setState({
          result: res.result
        })
        const oldHistoryString = localStorage.getItem("history")
        const oldHistory = oldHistoryString ? JSON.parse(oldHistoryString) : []
        const result = `(${getDateTime()}): ${amount} ${fromSymbolValue} = ${
          res.result
        } ${toSymbolValue}`
        const history = oldHistory.concat([result])
        localStorage.setItem("history", JSON.stringify(history))
      } else {
        alert(res.data.message)
      }
    })
  }

  render() {
    const { symbols, amount, fromSymbol, toSymbol, result } = this.state
    return (
      <div className="converter">
        <Text text="Amount" className="converter__label" />
        <Input
          value={amount}
          type="number"
          onChange={(e) => {
            this.setState({ amount: e.target.value })
          }}
        />
        <Text text="From" className="converter__label" />
        <Select
          isDisabled={!symbols.length}
          options={symbols}
          value={fromSymbol}
          onChange={(option) => {
            this.setState({ fromSymbol: option })
          }}
        />
        <Text text="To" className="converter__label" />
        <Select
          isDisabled={!symbols.length}
          options={symbols}
          value={toSymbol}
          onChange={(option) => {
            this.setState({ toSymbol: option })
          }}
        />
        <Button
          text="CONVERT"
          onClick={this.convert}
          className="converter__submit"
        />
        <Text text={result} className="converter__result" />
        {result !== initialResult && (
          <Text
            text={`${amount} ${fromSymbol.value} = ${result} ${toSymbol.value}`}
            className="converter__result__description"
          />
        )}
      </div>
    )
  }
}
