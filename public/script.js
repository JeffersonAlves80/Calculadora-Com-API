// Funções para armazenar valores 
let displayValue = ""
let operator = ""
let a = null

// Função para limpar o display e resetar todas as variáveis
function clearDisplay() {
  displayValue = ""
  operator = ""
  a = null
  updateDisplay("0")
}

// Função para deletar o último caractere do display
function deleteChar() {
  displayValue = displayValue.slice(0, -1)
  updateDisplay(displayValue || "0")
}

// Função para adicionar um número ao display
function appendNumber(number) {
  displayValue += number
  updateDisplay(displayValue)
}

// Função para adicionar um operador
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

// Função para atualizar o display com um novo valor
function updateDisplay(value) {
  document.getElementById("display").innerText = value
}

// Função assíncrona para calcular o resultado
async function calculateResult() {
  if (a !== null && operator && displayValue) {
    const b = parseFloat(displayValue)
    const encodedOperator = encodeURIComponent(operator) // Faz uma requisição à API para calcular o resultado
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
