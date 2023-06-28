const clock=document.querySelector("#clock");

function getClock(){
    const d=new Date();
    const h=String(d.getHours()).padStart(2, "0");
    const m=String(d.getMinutes()).padStart(2, "0");
    const s=String(d.getSeconds()).padStart(2, "0");
    clock.innerText=(`${h} : ${m} : ${s}`);
}
getClock();
setInterval(getClock, 1000);