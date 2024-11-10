
hour=document.querySelector("#hour");
 minute=document.querySelector("#minute");
second=document.querySelector("#second");

setInterval(()=>{
d=new Date();
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
hour.innerText=htime;
minute.innerText=mtime;
second.innerText=stime;
},1000);




// hour.innerText="10";
// minute.innerText="11";
// second.innerText="12";

// // setInterval(()=>{

 

//     d=new Date();
//     htime=d.getHours();
//     mtime=d.getMinutes();
//     stime=d.getSeconds();
    
//     hour.innerText=htime;
//     minute.innerText=mtime;
//     second.innerText=stime;

//     },1000);