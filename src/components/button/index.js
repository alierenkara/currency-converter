import React from "react"
import cn from "classnames"

import "./assets/style.scss"

export default function Button(props) {
  const { className, text, ...cleanedProps } = props
  return (
    <button
      className={cn("currency-converter-button", className)}
      {...cleanedProps}
    >
      {text}
    </button>
  )
}
