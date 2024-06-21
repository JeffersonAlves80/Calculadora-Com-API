let displayValue = ""
let operator = ""
let a = null

function clearDisplay() {
  displayValue = ""
  operator = ""
  a = null
  updateDisplay("0")
}

function deleteChar() {
  displayValue = displayValue.slice(0, -1)
  updateDisplay(displayValue || "0")
}

function appendNumber(number) {
  displayValue += number
  updateDisplay(displayValue)
}

function appendOperator(op) {
  if (a === null) {
    a = parseFloat(displayValue)
    displayValue = ""
    operator = op
  } else {
    calculateResult()
    operator = op
  }
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value
}

async function calculateResult() {
  if (a !== null && operator && displayValue) {
    const b = parseFloat(displayValue)
    // Encode the operator before including it in the URL
    const encodedOperator = encodeURIComponent(operator)
    const response = await fetch(
      `/calculate?a=${a}&b=${b}&op=${encodedOperator}`
    )
    const result = await response.text()
    updateDisplay(result)
    a = null
    operator = ""
    displayValue = ""
  }
}
