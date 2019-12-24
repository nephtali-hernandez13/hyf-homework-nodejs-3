const express = require('express')
const app = express()
const port = 3000
let list = []

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req,res) => { res.json( list ) })
app.post('/user', (req,res) => {         
    //list.push({id: 0})
    list.push({ id: ((list.length+1)-1) }); res.json(list) 
    res.json(list);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
