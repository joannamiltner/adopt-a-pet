console.log("pet.js")

// needs
const mongoose=require("mongoose");
// const LikePetSchema=require("./likepet");

// schemas
const PetSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Pet name is required"],
        minlength:[3, "Pet name must be 3 characters or longer"]
        // if "" ==="" return false
    },
    type:{
        type:String,
        required:[true, "Pet type is required"],
        minlength:[3, "Pet type must be 3 characters or longer"]
        // array.sort();
    },
    description:{
        type:String,
        required:[true, "Pet description is required"],
        minlength:[3, "Pet description must be 3 characters or longer"]
    },
    skills1:{
        type:String,
        required:[false]  
    },
    skills2:{
        type:String,
        required:[false]  
    },
    skills3:{
        type:String,
        required:[false]  
    },
    likes: Number
    // likepet:[LikePetSchema]
}, {timestamps: true});

// register schema
mongoose.model("Pet", PetSchema);