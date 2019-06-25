console.log("mongoose.js")

// needs
const mongoose=require("mongoose");

// exports
module.exports=(DB_NAME) => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    require(`../models/pet`);
}