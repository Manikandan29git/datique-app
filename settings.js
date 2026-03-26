function saveSettings(){

let name=document.getElementById("settingName").value;

state.userName=name;

showToast("Settings saved","success");

}