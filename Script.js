//let hours=00;
let mins=00;
let seconds=00;
let tens=00;
//let getHours = document.querySelector('.hours');
let getMins = document.querySelector('.mins');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');

let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click',()=>{
    interval = setInterval(startTimer,10);
})

btnStop.addEventListener('click',()=>{
    clearInterval(interval);
})

btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens= '00';
    seconds= '00';
    mins='00'
    //hours='00'
    
    //getHours.innerHTML=hours;
    getMins.innerHTML=mins;
    getSeconds.innerHTML=seconds;
    getTens.innerHTML=tens;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML= '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML= tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML=seconds;
        tens= 0;
        getTens.innerHTML= '0'+0;
    }
    if(seconds >99){
        getSeconds.innerHTML=seconds;
    }
    if(seconds>=60){
        mins++;
        getMins.innerHTML='0'+mins;
        seconds=0;
        getSeconds.innerHTML='0'+0;
    }
   if(mins >60){
        getMins.innerHTML=mins;
    }
    
    /*if(minss>=60){
        hours++;
        getHours.innerHTML='0'+hours;
        mins=0;
        getMinss.innerHTML='0'+0;
    }
    if(hours >60){
        getHours.innerHTML=hours;
    }*/
}
