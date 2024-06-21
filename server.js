const express = require("express")
const path = require("path")
const app = express()

const PORT = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get("/calculate", (req, res) => {
  const a = parseFloat(req.query.a)
  const b = parseFloat(req.query.b)
  const op = req.query.op

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
        throw new Error("Inválido divisão por zero")
      }
      result = a / b
    } else {
      throw new Error("Operador inválido")
    }

    res.send(result.toString())
  } catch (error) {
    console.error(error)
    res.status(400).send(error.message || "Erro ao calcular o resultado")
  }
})

app.listen(PORT, () => {
  console.log(`Servidor em execução em http://localhost:${PORT}`)
})
