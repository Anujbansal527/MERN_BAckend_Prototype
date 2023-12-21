const model_name = require("./Models/model_Name");

const createFunctionality =  async (req,res) =>{
    try {
        //fetching data form where models are created 
        const { /*  name,age,email */} = req.body;
        //getting and wait till data get put
        const  response = await model_name.create({
            name,age,email
        })
        //if work complete send msg
        res.status(200).json({
            sucess:true,
            data:response,
            message:"data creted"
        });
}
catch(err){
    //if not then send message
    console.err(err);
    res.status(500).json({
        sucess:false,
        data:"internal error",
        message:err.message
    })
}
}

//exporting module to use for other
module.exports = createFunctionality ;