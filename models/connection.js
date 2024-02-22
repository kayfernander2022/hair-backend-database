/////////////////////////
// DEPENDENCIES
/////////////////////////
require('dotenv').config()
const {DATABASE_URL} = process.env
const mongoose=require('mongoose')


/////////////////////////
// CONNECT TO DB
/////////////////////////


mongoose.set('strictQuery',false)
mongoose.connect(DATABASE_URL)

mongoose.connection
.on('open', ()=> console.log('You are connected to mongoose'))
.on('close', ()=> console.log('disconnected from mongoose'))
.on('error', (error)=> console.log(error))


//export the connection
module.exports = mongoose