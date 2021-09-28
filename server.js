'use strict'
const express = require('express') // require the express package
const app = express()
const cors = require('cors');
const mongoose = require("mongoose");
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json());

const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT;

const { getFruitApi,getOwnFruit,createFruit,deleteFruit,updateFruit} =require  ('./controler/fruit.controler')

mongoose.connect(MONGO_DB);

app.get('/getFruit', getFruitApi)
app.get('/getOwnFruit', getOwnFruit)
app.post('/getOwnFruit',createFruit)
app.delete('/getOwnFruit/:_id', deleteFruit)
app.post('/getOwnFruit/:_id',updateFruit)





app.listen(PORT)