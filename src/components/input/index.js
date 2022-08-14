import React from "react"
import cn from "classnames"

import "./assets/style.scss"

export default function Input(props) {
  const { className, ...cleanedProps } = props
  return (
    <input
      className={cn("currency-converter-input", className)}
      {...cleanedProps}
    />
  )
}
