
// get an instance of router
import express from 'express'
import todo from '../db/todo'
const router = new express.Router()

router.get('/', (req,res) => {
    todo.find({}, (err, results) => {
        res.json(results)
    })
});

router.get('/:id', (req,res) => {
    todo.findById(req.params.id, (err, results) => {
        res.json(results)
    })
});

router.post('/', (req,res) => {
    todo.create(req.body, (err, results) => {
        if(err) {
            console.log(err.message)
            res.sendStatus(500)
        }
        else {
            res.sendStatus(200)
        }
    })
})

router.put('/:id', (req,res) => {
    todo.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, results) => {
        if(err) {
            console.log(err.message)
            res.sendStatus(500)
        }
        else {
            res.sendStatus(200)
        }
    })
})

router.delete('/:id', (req,res) => {
    todo.findByIdAndDelete(req.params.id, (err, results)=>{
        if(err){
            console.log(err.message)
            res.sendStatus(500)
        }
        else{
            res.sendStatus(200)
        }

    })


})






export default {router}