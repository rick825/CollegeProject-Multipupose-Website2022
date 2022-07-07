let sseconds = 00;
let stens = 00;
let smins = 00;
let sgetSeconds = document.querySelector('.sseconds');
let sgetTens = document.querySelector('.stens');
let sgetMins = document.querySelector('.smins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let sinterval;

btnStart.addEventListener('click', () => {
    clearInterval(sinterval);
    sinverval = setInterval(startStopTimer, 10);
});
btnStop.addEventListener('click', () => {
    clearInterval(sinverval);
});
btnReset.addEventListener('click', () => {
    clearInterval(sinverval);
    stens = '00';
    sseconds = '00';
    smins = '00';
    sgetSeconds.innerHTML = sseconds;
    sgetTens.innerHTML = stens;
    sgetMins.innerHTML = smins;
});

function startStopTimer(){
    stens++;
    if(stens <= 9){
        sgetTens.innerHTML = '0' + stens;
    }
    if(stens > 9){
        sgetTens.innerHTML = stens;
    }
    if(stens > 99){
        sseconds++;
        sgetSeconds.innerHTML = '0' + sseconds;
        stens = 0;
        sgetTens.innerHTML = '0' + 0;
    }
    if(sseconds > 9){
        sgetSeconds.innerHTML = sseconds;
    }
    if(sseconds > 59){
        smins++;
        sgetMins.innerHTML = '0' + smins;
        sseconds = 0;
        sgetSeconds.innerHTML = '0' + 0;
    }
    if(smins > 9){
        sgetSeconds.innerHTML = smins;
    }
}













