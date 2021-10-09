"use strict";
let num;
let randomNum;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const getRandomNumber = function(maxNum) {
  return Math.floor(Math.random() * Math.floor(maxNum));
};


const startGame = function() {

  randomNum = getRandomNumber(100);
  console.log(randomNum);

  const game = function() {
    num = prompt("Угадай число от 1 до 100");
    if(num === null) {
      alert("Игра окончена");
      return;
    }
    if (isNumber(num)) {
      num = +num;
      if (num === randomNum) {
        alert('Поздравляю, Вы угадали!!!');
        return;
      } else if (num > randomNum) {
        alert('Загаданное число меньше');
        game();
      } else if (num < 100) {
        alert("Загаданное число больше");
        game();
      } 
    } else {
      alert("Введи число!");
      game();
    }
  };
  game();
};

startGame();