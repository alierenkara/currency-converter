import axios from "axios"
import { EXCHANGE_API_URL } from "constants"

const EXCHANGE_HEADER_OPTIONS = {
  headers: {
    apikey: process.env.EXCHANGE_API_KEY
  }
}

export const getSymbols = () => {
  return axios
    .get(`${EXCHANGE_API_URL}/symbols`, EXCHANGE_HEADER_OPTIONS)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return { ...err.response, success: false }
    })
}

export const convertCurrency = ({ toSymbol, fromSymbol, amount }) => {
  return axios
    .get(
      `${EXCHANGE_API_URL}/convert?to=${toSymbol}&from=${fromSymbol}&amount=${amount}`,
      EXCHANGE_HEADER_OPTIONS
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return { ...err.response, success: false }
    })
}
