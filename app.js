let state = {
uploadedData:null,
valuation:null,
brandOffers:{},
userName:"User",
userEmail:"user@hushh.ai"
};

function doEmailLogin(){

document.getElementById("loginScreen").classList.remove("active");
document.getElementById("appScreen").classList.add("active");

showToast("Login successful","success");

}