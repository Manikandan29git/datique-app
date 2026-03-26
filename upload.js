function handleFileUpload(data){

let records=data.length;

state.uploadedData={
total:records,
categories:{
shopping:20,
social:10,
finance:5
}
};

showToast("Data uploaded successfully","success");

}