const express = require("express");
const rootRouter=require("./routes/index");
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken");
const app = express();
const cors=require("cors");
app.use("cors");
app.use(bodyParser.json());


app.use("/api/v1/cricket/",rootRouter );

app.get('/',(req, res)=>{
    res.send("hello world");
})



app.listen(3000);