exports.calculate=(req,res)=>{

let categories=req.body.categories;

let rates={
shopping:2,
social:1,
finance:3
};

let total=0;

Object.entries(categories).forEach(([k,v])=>{
total+=v*(rates[k]||1);
});

res.json({
value:total
});

};