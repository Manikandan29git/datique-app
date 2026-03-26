const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

const uploadRoute=require("./routes/upload");
const valuationRoute=require("./routes/valuation");

app.use("/upload",uploadRoute);
app.use("/valuation",valuationRoute);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});