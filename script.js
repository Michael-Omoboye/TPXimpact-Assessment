function createDiamond(character) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let letterIndex = 0;

  const diamond = [];

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] == character.toUpperCase() && isNaN) {
      letterIndex = i;
    }
  }

  for (let i = 0; i <= letterIndex; i++) {
    diamond[i] = "";

    for (let j = 0; j < letterIndex - i; j++) {
      diamond[i] += " ";
    }

    diamond[i] += alphabet[i];

    if (alphabet[i] != "A") {
      for (let j = 0; j < 2 * i - 1; j++) {
        diamond[i] += " ";
      }
      diamond[i] += alphabet[i];
    }
    console.log(diamond[i]);
  }
  for (let i = letterIndex - 1; i >= 0; i--) {
    console.log(diamond[i]);
  }
}

createDiamond("E");
