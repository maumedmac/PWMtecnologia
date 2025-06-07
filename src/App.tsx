import { useState, ChangeEvent } from 'react'
import './App.css'

function App(): JSX.Element {
  const [dolares, setDolares] = useState<string>('')
  const tasaCambio = 6.96 // 1 USD = 6.96 BOB (Bolivianos)
  const tasaCambioParalelo = 16.60 // Cotización paralela actual

  const convertirABolivianos = (usd: string, tasa: number): string => {
    const cantidad = parseFloat(usd)
    if (isNaN(cantidad)) return ''
    return (cantidad * tasa).toFixed(2)
  }

  return (
    <div className="container">
      <h1>Convertidor de Dólares a Bolivianos</h1>
      <div className="card">
        <div className="input-group">
          <label>
            Dólares (USD):
            <input
              type="number"
              value={dolares}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setDolares(e.target.value)}
              placeholder="Ingrese cantidad en dólares"
            />
          </label>
        </div>
        <div className="result">
          <h2>Resultado:</h2>
          <div className="rates">
            <div className="rate-official">
              <h3>Cambio Oficial:</h3>
              <p>
                {dolares ? `${dolares} USD = ${convertirABolivianos(dolares, tasaCambio)} BOB` : 'Ingrese una cantidad'}
              </p>
              <small>Tasa: {tasaCambio} BOB/USD</small>
            </div>
            <div className="rate-parallel">
              <h3>Cambio Paralelo:</h3>
              <p>
                {dolares ? `${dolares} USD = ${convertirABolivianos(dolares, tasaCambioParalelo)} BOB` : 'Ingrese una cantidad'}
              </p>
              <small>Tasa: {tasaCambioParalelo} BOB/USD</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
