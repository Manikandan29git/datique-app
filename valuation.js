function runValuation(){

let rates={
shopping:2,
social:1,
finance:3
};

let total=0;
let breakdown={};

Object.entries(state.uploadedData.categories).forEach(([cat,count])=>{

let rate=rates[cat]||1;
let value=count*rate;

breakdown[cat]={
count,
rate,
value
};

total+=value;

});

state.valuation={
total,
breakdown
};

updateDashStats();

}