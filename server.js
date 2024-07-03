const express = require("express") // Importa o framework Express
const path = require("path")  // Importa o módulo path para trabalhar com caminhos de arquivos
const app = express() // Cria uma instância do Express

const PORT = 3000 // Inicia o servidor na porta 3000

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")))

// Define a rota "/calculate" para lidar com cálculos
app.get("/calculate", (req, res) => {
  const a = parseFloat(req.query.a) 
  const b = parseFloat(req.query.b) 
  const op = req.query.op

  // Realiza a operação baseada no operador
  let result
  try {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Tipos de entrada inválidos.")
    }

    if (op === "+") {
      result = a + b
    } else if (op === "-") {
      result = a - b
    } else if (op === "*") {
      result = a * b
    } else if (op === "/") {
      if (b === 0) {
        // Verifica se o divisor é zero
        throw new Error("Inválido divisão por zero")
      }
      result = a / b
    } else {
      throw new Error("Operador inválido") // Lança um erro se o operador for inválido
    }
    // Envia o resultado como string
    res.send(result.toString())
  } catch (error) {
    console.error(error)
    res.status(400).send(error.message || "Erro ao calcular o resultado") // Envia uma resposta de erro ao cliente
  }
})

app.listen(PORT, () => {
  console.log(`Servidor em execução em http://localhost:${PORT}`)
})
