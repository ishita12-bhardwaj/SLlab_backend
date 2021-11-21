const { response } = require("express")
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const url="mongodb+srv://ishita:ishita12@cluster0.5s3gd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema=require('./student');
mongoose.connect(url).then(()=>console.log("Connected to the database"))
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
    const myname=req.body.name;
    const myreg_no=req.body.reg_no;
    const mymarks=req.body.marks;

    try{
        const newstudent=new mySchema(
            {
                name:myname,
                reg_no:myreg_no,
                marks:mymarks

            }
        )
        const savedstudent=await newstudent.save()
        res.json(
            {"message":"Student is saved","data":savedstudent}
        )

    }

    catch(err)
    {
        res.json(err);

    }


})


app.use("/",(req,res)=>{
    //res.send("Hello from express server")
    res.json(
        {
            "message":"hehe"
        }
    )
})
app.listen(3000,()=>console.log("Express started"))