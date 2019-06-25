// needs
const mongoose=require("mongoose");

// schemas
const LikePetSchema=new mongoose.Schema({



    //   vote(i){
//     console.log("voting has occured", i);
//     let c = [...this.state.classes];
//     c[i].votes++;
//     this.setState({classes:c});
//   }

// <button onClick={this.vote.bind(this, i)}>Likes: {c.votes}</button>


},{timestamps:true});

// register schema
mongoose.model("LikePet", LikePetSchema);

// exports
module.exports=LikePetSchema;