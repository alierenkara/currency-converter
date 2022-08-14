export const symbolsToSelectOptions = (symbols) => {
  return Object.entries(symbols).map((item) => {
    return {
      value: item[0],
      label: `${item[0]} - ${item[1]}`
    }
  })
}

export const getDateTime = () => new Date().toLocaleString("tr-TR")
