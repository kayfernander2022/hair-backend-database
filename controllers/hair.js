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
module.exports=router