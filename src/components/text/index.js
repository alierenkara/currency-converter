import React from "react"
import cn from "classnames"

import "./assets/style.scss"

export default function Text(props) {
  const { className, text, ...cleanedProps } = props
  return (
    <p className={cn("currency-converter-text", className)} {...cleanedProps}>
      {text}
    </p>
  )
}
