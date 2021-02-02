"use strict";

class Human {
  constructor(firstName, lastName, gender, age, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    this.$firstName = document.getElementById("first-name");
    this.$lastName = document.getElementById("last-name");
    this.$gender = document.getElementById("gender");
    this.$age = document.getElementById("age");
    this.$calories = document.getElementById("calories");
    this.$speach = document.getElementsByClassName("speach")[0];
    this.$portrait = document.getElementsByClassName("portrait")[0];
  }
  sleepFor() {
    this.$speach.textContent = `I'm sleeping now...`;
    this.$speach.style.color = "red";
    setTimeout(() => {
      this.$portrait.style.transform = "scale(1.0)";
      this.$speach.style.color = "black";
    }, 500);
    this.$portrait.style.transform = "scale(1.05)";
    this.$speach.style.color = "red";
    setTimeout(() => {
      this.$speach.textContent = `I'm awake now!`;
      setTimeout(() => {
        this.$portrait.style.transform = "scale(1.0)";
        this.$speach.style.color = "black";
      }, 500);
      this.$portrait.style.transform = "scale(1.05)";
      this.$speach.style.color = "red";
      waiting = false;
      setTimeout(() => {
        this.$speach.textContent = `...`;
      }, 3000);
    }, 5000);
  }

  feed() {
    if (!hungry) {
      this.$speach.textContent = `I'm not hungry`;
      this.$speach.style.color = "red";
      this.$portrait.style.transform = "scale(1.05)";
      waiting = false;
      setTimeout(() => {
        this.$portrait.style.transform = "scale(1.0)";
        this.$speach.style.color = "black";
      }, 500);
      setTimeout(() => {
        this.$speach.textContent = "...";
      }, 3000);
    } else {
      clearInterval(global);
      this.$speach.textContent = `Nom nom nom`;
      this.$speach.style.color = "red";
      this.$portrait.style.transform = "scale(1.05)";
      setTimeout(() => {
        this.$portrait.style.transform = "scale(1.0)";
        this.$speach.style.color = "black";
      }, 500);
      setTimeout(() => {
        this.$speach.style.color = "red";
        this.$speach.textContent = "I'm still hungry";
        this.calories += 200;
        this.$calories.textContent = this.calories;
        this.$calories.style.color = "red";
        setTimeout(() => {
          this.$calories.style.color = "black";
          this.$speach.style.color = "black";
        }, 500);
        setTimeout(() => {
          this.$speach.textContent = "...";
        }, 3000);
        waiting = false;
        everyMinuteHunger();
      }, 10000);
    }
  }
}

// class Superhero extends Human {
//   constructor() {
//     super(calories, gender);
//   }
//   fly() {}
//   fightWithEvil() {}
// }
const person = new Human({});
person.firstName = "Tony";
person.lastName = "Stark";
person.gender = "male";
person.age = 44;
person.calories = 0;

let waiting = false;
let global;

let applyCharacters = () => {
  person.$firstName.textContent = person.firstName;
  person.$lastName.textContent = person.lastName;
  person.$gender.textContent = person.gender;
  person.$age.textContent = person.age;
  person.$calories.textContent = person.calories;
};

let everyMinuteHunger = () => {
  clearInterval(global);
  global = setInterval(() => {
    if (person.calories !== 0) {
      person.calories -= 200;
      person.$calories.textContent = person.calories;
      imHungry();
      console.log("Every minute hunger...");
    }
  }, 60000);
};

let imHungry = () => {
  waiting = true;
  person.$calories.style.color = "red";
  person.$speach.textContent = "I'm hungry...";
  person.$speach.style.color = "red";
  setTimeout(() => {
    person.$calories.style.color = "black";
    person.$speach.style.color = "black";
  }, 500);
  setTimeout(() => {
    person.$speach.textContent = "...";
    waiting = false;
  }, 3000);
};

document.addEventListener("DOMContentLoaded", () => {
  applyCharacters();
  everyMinuteHunger();
  setTimeout(() => {
    imHungry();
  }, 5000);
});

let $sleepButton = document.getElementsByClassName("sleep")[0];
$sleepButton.onclick = () => {
  if (!waiting) {
    waiting = true;
    person.sleepFor();
  }
};

let hungry;

let $eatButton = document.getElementsByClassName("feed")[0];
$eatButton.onclick = () => {
  if (person.calories >= 500) {
    hungry = false;
  } else {
    hungry = true;
  }
  if (!waiting) {
    waiting = true;
    person.feed();
  }
};
