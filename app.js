const endDate="11 Mar 2024 7:26 PM";
document.querySelector("#ramadanDate").innerHTML=endDate;
const inputs=document.querySelectorAll("input");
setInterval(function timer(){
    const end = new Date(endDate);
    const today=new Date();
    const diff=(end-today)/1000;
    if (diff<0)return;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
},1000)
timer()