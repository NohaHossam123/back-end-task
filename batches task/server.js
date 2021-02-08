const express = require('express');
const mongoose = require('mongoose');
const batchRouter = require('./routes/batches');

const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect('mongodb://localhost:27017/products',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("successfully connected to mongodb"))
.catch(err => console.log('Connection failed', err));


app.use(express.json());

app.use('/batch', batchRouter);

app.listen(PORT,(err)=> {
    if(!err) console.log(`started server on port ${PORT}`)
})