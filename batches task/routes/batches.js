const express = require('express');
const BatchModel = require('../models/batches');
const router = express.Router();

// function to create a batch 

router.post('/',async( req, res) =>{
    try {
        const { number, size, color, quantity } = req.body;
        const batch = await BatchModel.create({
            number,
            size,
            color,
            quantity
        });
        res.send(batch)
    } catch(err){
        return res.status(400).send({ message: err.message });
        
    }
})

// function to list all batches

router.get('/list',(req, res) =>{
    BatchModel.find({},(err,batches)=>{
        if(err) return res.send(err);
        res.json(batches);
    })
})

module.exports = router ;