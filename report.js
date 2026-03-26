function downloadCSV(){

let rows=[
["Records",state.uploadedData.total],
["Value",state.valuation.total]
];

let csv=rows.map(r=>r.join(",")).join("\n");

let blob=new Blob([csv]);

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="report.csv";

a.click();

}