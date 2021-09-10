const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors= require('cors');

const inventoryapp=express();
//import routes
const isRoutes = require('./routes/stockitems');
const iorderRoutes = require('./routes/inventoryorders');
const isupplierRoutes = require('./routes/inventorysuppliers');

//app middleware
inventoryapp.use(bodyParser.json());
inventoryapp.use(cors());

//route middleware
inventoryapp.use(isRoutes);
inventoryapp.use(iorderRoutes);
inventoryapp.use(isupplierRoutes);

//rgt123--> password-->rgt12345
const ISPORT=8951;

const SIDB_URL='mongodb+srv://rgt123:rgt12345@cluster0.cekrw.mongodb.net/InventoryDB?retryWrites=true&w=majority';



mongoose.connect(SIDB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log('DB connection err',err);
})
inventoryapp.listen(ISPORT,()=>{
    console.log(`App is running on ${ISPORT}`);
})