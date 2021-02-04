"use stict";

let houseMixin = {
  wordReplace(minus, plus) {
    this.description = this.description.replace(minus, plus);
  },
  wordInsertAfter(after, word) {
    this.description = this.description.replace(after, after + " " + word);
  },
  wordDelete(minus) {
    this.description = this.description.replace(minus, "");
  },
  wordEncrypt() {
    this.description = (this.description + "").replace(/[a-zA-Z]/gi, function (
      s
    ) {
      return String.fromCharCode(
        s.charCodeAt(0) + (s.toLowerCase() < "n" ? 13 : -13)
      );
    });
  },
  wordDecrypt() {
    this.wordEncrypt();
  },
};

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
