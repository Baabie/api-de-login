import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

// http://lacalhost:3333/login

app.post('/login', (req, res) => {
    const data = req.body

    let logar = {
        email: data.email,
        senha: data.senha,
    }
})

app.listen(3333,()=> console.log('Servidor rodando na porta 3333'))