const  collection = require('./db')

 




async function signup (req, res){
    const body = await {
      
              phone:req.body.phone,
              password:req.body.password,
              fullname:req.body.fullname 
               }
         const phone = req.body.phone
        const task = await collection.findOne({phone:phone})

        if(!task){
    collection.insertMany(body)
      .then(() => {
        res.send("<h1>successfully registred<h1>  <a href='/'> login page </a>")
        
      })
      .catch((err) => {
        res.send(err.message);
        console.log(err.message);
      });
  }
  else{
    res.send('<h1>the phone is allready regstered</h1>')
  }
}






  async function login(req, res) {
   try{
    const { phone, password } = await req.body;
    const  task =await collection.findOne({phone:phone,password:password})
     

    if(task){
      res.redirect('/homepage.html')
      
        }
  else{
    res.send('<h1>incorrect password or phone   <h1> ')
  }

    }
   
   catch(error){

    res.send(error)
    console.log(error)
   }
  }





  

  
  




module.exports={  
    
    
       signup,
       login
       



}