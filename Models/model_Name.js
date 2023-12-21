const mongoose = require("mongoose");

//creating data base structurewith validations
const Model_name = new mongoose.Schema(
    {
        /*        
        name: {
            //validations
            type:String,
            require:true,
            },
        age: Number,
        email:String
        */
   }
);

//export for useable for other
module.exports = mongoose.model("/*name of model*/", /*  Model_name */)
                     //iss name se hum use karege //yaha humne apne schema ko bheja hai
