/*let cislo;

cislo = Number(prompt('Zadej číslo:'));

while (cislo === 0) {
  console.log('Prosím zadej číslo odlišé od nuly.');
  cislo = Number(prompt('Zadej číslo:'));
}

console.log('Vaše číslo je:' + cislo);*/

let soucet = 0;
let cislo = Number(prompt('zadej cislo'));

while (cislo !== 0) {
  soucet = soucet + cislo;
  console.log('Součet je ' + soucet);
  cislo = Number(prompt('zadej cislo'));
}
