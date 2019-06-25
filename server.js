console.log("server.js")

// needs
const express=require("express"),
    cors=require("cors"),
    app=express(),
    DB_NAME="petdb",
    port=8000,
    bp=require("body-parser");

// use
app.use(cors());
app.use(bp.json());
app.use(express.static(__dirname + "/client/build"));

// exports
require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});