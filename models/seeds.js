const mongoose = require('./connection')
const Hair = require('./hair')

mongoose.connection.on('open',()=>{
  const starterHair=[
    {id:0, name: "Indian Curly", description: "Soft and luscious. No shedding, no tangling"},
    {id:1, name: "Indian Straight", description: "Our Indian straight hair has predominately straight cuticles. This hair is ideal for the woman who prefers silky smooth tresses at all times."},
    {id:2, name: "Indian Wavy", description: "It has a natural loose body wave which allows great versatility & body when styling."},
    {id:3, name: "Brazilian Curly", description: "Our Brazilian curly pattern is great for achieving a voluminous look." },
    {id:4, name: "Brazilian Wavy", description: "Soft and sleek. Durable with no tangling"}
  ]
  Hair.deleteMany({})
  .then(() => {
    return Hair.create(starterHair);
  })
  .then((hair) => {
    console.log('created +' + hair);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error:', err);
    mongoose.connection.close();
  });

})


//Hair.deleteMany({},(err,data)=>{
  //Hair.create(starterHair,(err,hair)=>{
   // console.log('created +' + hair)

  //mongoose.connection.close()
 // })
//})