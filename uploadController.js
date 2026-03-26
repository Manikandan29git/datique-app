exports.uploadData=(req,res)=>{

let data=req.body.data;

let total=data.length;

res.json({
records:total
});

};