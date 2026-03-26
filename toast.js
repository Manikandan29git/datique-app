function showToast(msg,type){

let t=document.getElementById("toast");

t.innerText=msg;

t.classList.add("show");

setTimeout(()=>{
t.classList.remove("show");
},3000);

}