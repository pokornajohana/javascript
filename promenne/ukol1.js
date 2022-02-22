//vypočti počet minut v celém ledu.
//vypíš vásledek na konzoli

let minutvhodine = 60;
let hodinvedne = 24;
let dnuvlednu = 31;

let vysledek = minutvhodine * hodinvedne * dnuvlednu;

console.log('v lednu je celkem' + vysledek);

let jméno = 'Petra';
let věk = 34;
let váha = 65;
let výška = 1.67;

let BMI = váha / (výška * výška);

console.log(
  'jmenuji se ' +
    jméno +
    ' , je mi ' +
    věk +
    ' let, vážím ' +
    váha +
    ' kg, měřím ' +
    výška +
    ' m a moje BMI je ' +
    BMI
);
