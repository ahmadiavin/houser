const express = require('express');
const ctrl = require('./controller')
require("dotenv").config();
const massive = require('massive');

const app = express()


app.use(express.json())


massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})


app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses')

const port = 4000;
app.listen(port, () => {
    console.log('listening on 4000')
})