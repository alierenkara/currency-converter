import React from "react"
import ReactSelect from "react-select"
import cn from "classnames"

import "./assets/style.scss"

export default function Select(props) {
  const { className, ...cleanedProps } = props

  return (
    <ReactSelect
      className={cn("currency-converter-select", className)}
      classNamePrefix="currency-converter-select"
      {...cleanedProps}
    />
  )
}
