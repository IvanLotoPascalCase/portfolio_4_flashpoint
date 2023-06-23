// IMPORTS
import { HOST, PORT } from './config.js'
import express from 'express'

// INSTANCIA APP DE EXPRESS
const app = express();

// LEVANTA EL SERVIDOR EN EL PUERTO ESPECIFICADO - CONFIGURAR VARIABLE DE ENTORNO MANUALMENTE
app.listen(PORT, () => {
    console.log(`Server running on ${HOST}${PORT}/`)
})

// OK
app.get('/', (req, res) => {
    res.sendStatus(200)
})
