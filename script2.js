
function runClock(){
var tme=new Date();
var hrs=tme.getHours();
var min=tme.getMinutes();
var sec=tme.getSeconds();
var d=tme.getDate();
var day=tme.getDay();
var month=tme.getMonth();
var txt="AM";
if ((hrs>12)||(hrs==12)){
    hrs=hrs-12;
    if(hrs==0){
    hrs=12;    
    }
    txt="PM";
} 
else if(hrs==0){
    hrs=0;
    txt="AM";
}
hrs=hrs<10?'0'+hrs:hrs;
min=min<10?'0'+min:min;
sec=sec<10?'0'+sec:sec;
const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
const t=document.querySelector('.txt');
t.innerHTML=txt;
hrs=hrs.toString();
h[0].innerHTML=hrs[0];
h[1].innerHTML=hrs[1];
min=min.toString();
m[0].innerHTML=min[0];
m[1].innerHTML=min[1];
sec=sec.toString();
s[0].innerHTML=sec[0];
s[1].innerHTML=sec[1];

const Month=document.querySelector('.mth');
const date=document.querySelector('.dte');
const Day=document.querySelector('.day'); 
Month.innerHTML=month+1;
date.innerHTML=d;
switch (day){
    case 1:
        Day.innerHTML="Mon";
        break;
    case 2:
        Day.innerHTML="Tue";
        break;
    case 3:
        Day.innerHTML="Wed";
        break;
    case 4:
        Day.innerHTML="Thu";
        break;
    case 5:
        Day.innerHTML="FRI";
        break;
    case 6:
        Day.innerHTML="Sat";
        break;
    case 7:
        Day.innerHTML="Sun";
        break;
    }
}


runClock();
setInterval(runClock,1000);

