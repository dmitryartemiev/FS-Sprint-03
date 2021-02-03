"use stict";

let houseMixin = {
  wordReplace(minus, plus) {
    this.description = this.description.replace(minus, plus);
  },
  wordInsertAfter(after, word) {
    this.description = this.description.replace(after, after+' '+word);
  },
  wordDelete(minus) {
    this.description = this.description.replace(minus, '');
  },
  wordEncrypt() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('')
    let encryptAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    encryptAlfabet = encryptAlphabet.split('')
    for(let i = 0; i<this.description.length; i++){
      if(alphabet.includes(this.description[i])){
      let index = alphabet.indexOf(this.description[i])
      this.description = this.description.replace(this.description[i], encryptAlphabet[index])
     }
    }
  },
  wordDecrypt() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('')
    let encryptAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    encryptAlfabet = encryptAlphabet.split('')
    for(let i = 0; i<this.description.length; i++){
      if(alphabet.includes(this.description[i])){
      let index = encryptAlphabet.indexOf(this.description[i])
      this.description = this.description.replace(this.description[i], alphabet[index])
     }
    }
  },
};

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild());
// 220
console.log(house.description + "old");
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description + " word replace");
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description + " word delete");
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter("with", "marble");
console.log(house.description + " word insert after");
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description + " word encrypt");
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description + " word decrypt");
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
