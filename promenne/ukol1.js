let jmenoUzivatele = prompt('Jak se jmenuješ?');
let vekUzivatele = Number(prompt('Kolik je Ti let?'));

if (vekUzivatele < 18) {
  console.log(
    'Vaše jméno je ' +
      jmenoUzivatele +
      ', je Vám ' +
      vekUzivatele +
      'můžete tedy řídit'
  );
} else {
  console.log(
    'Vaše jméno je ' +
      jmenoUzivatele +
      ', je Vám ' +
      vekUzivatele +
      'Už můžete řídit auto'
  );
}
