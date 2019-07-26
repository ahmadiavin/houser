const express = require('express');
const ctrl = require('./controller')
require("dotenv").config();
const massive = require('massive');

const app = express()




massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})
app.use(express.json())


app.get('/api/houses', ctrl.getHouses)
app.post('/api/house', ctrl.addHouse)

const port = 4000;
app.listen(port, () => {
    console.log('listening on 4000')
})