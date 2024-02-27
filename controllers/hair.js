const express= require('express')
const Hair= require('../models/hair')

const router = express.Router()

//Index
router.get('/', async(req,res)=>{
  try{
    res.json(await Hair.find({}))
  }catch(error){

    console.log(error)
    res.status(400).json(error)
  }
})

//Delete
router.delete('/:id', async(req,res)=>{
  try{
    res.json(await Hair.findByIdAndDelete(req.params.id))
  }catch(error){
    res.status(400).json(error)
  }
})

//Update
router.put('/:id', async(req,res)=>{
  try{
    res.json(await Hair.findByIdAndUpdate(req.params.id,req.body,{new:true}))
  }catch(error){

    console.log(error)
    res.status(400).json(error)
  }
})

//Create
router.post('/', async(req,res)=>{
  try{
    res.json(await Hair.create(req.body))
  }catch(error){
    res.status(400).json(error)
  }
})

//Show
router.get('/:id', async(req,res)=>{
  try{
    res.json(await Hair.findById(req.params.id))
  }catch(error){
    res.status(400).json(error)
  }
})

module.exports = router