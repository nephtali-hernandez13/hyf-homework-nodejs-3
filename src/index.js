const express = require('express')
const app = express()
const port = 3000
let list = []

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req,res) => { res.json( list ) })
app.get('/user/:id', (req,res) => res.send('User'))
app.post('user/:id', (req,res) => res.send('POST request'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
