const express = require('express');
const app = express();
const port = 3000;
let list = [];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req,res) =>  res.json( list ));

app.get('/user/:id', (req,res) => {     
    const user = list.find(usr => usr.id == req.params.id);
    res.json(user);
});

app.post('/user', (req,res) => {         
    list.push({id: 0});
    //list.push({ id: ((list.length+1)-1) }); res.json(list) 
    res.json(list);
});

app.delete('/user/:id', (req, res) => {
    index = list.indexOf(req.params.id);
    list.splice(index,1);
    if(list.length > 0){
        res.status(202).json({ ok: true })
    } else {
        res.status(204).json({ ok: true })
    }    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
