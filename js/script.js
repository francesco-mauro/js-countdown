let tempoRimanente = 10;

let intervalId = setInterval(function() {
    console.log(tempoRimanente + " secondi rimanenti");
    tempoRimanente--;

    if (tempoRimanente < 0) {
        clearInterval(intervalId);
        console.log("Buon anno!");
    }
}, 1000);
