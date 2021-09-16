import goblin from '../img/goblin.png'

export default class GamePlay {
  constructor() {
    this.setIntervalOne = null;
    this.setIntervalTwo = null;
    this.position = null;
    this.element = null;
    this.previousElement = null;
    this.collection = document.querySelectorAll(".field_li");
    this.points = 0;
    this.losingPoints = 5;
    this.click = true;
  }

  init() {
    this.setIntervalOne = setInterval(this.checkingPosition.bind(this), 2000);
    this.setIntervalTwo = setInterval(this.checkingClickEvent.bind(this), 2000);
    this.btnStartOver();
  }

  btnStartOver() {
    let btn = document.querySelector('.btn');
    let losingPointsValue = document.querySelector('.losingPoints_value');
    let pointValue = document.querySelector('.point_value');

    btn.addEventListener('click', (e) =>{
      pointValue.textContent = 0;
      this.setIntervalOne = setInterval(this.checkingPosition.bind(this), 2000);
      this.setIntervalTwo = setInterval(this.checkingClickEvent.bind(this), 2000);
      this.losingPoints = 5;
      this.points = 0;
      losingPointsValue.textContent = 5;
      btn.classList.add('btn__none');
    })
  }

  checkingClickEvent() {
    if(!this.click) {
      this.loss();
    }
    this.click = false;
  };

  checkingPosition() {
    let randomPosition = this.determiningRandomPosition();
    if (randomPosition === this.position) {
        this.checkingPosition();
    } else {
        this.insertGoblin(randomPosition);
    }
  }

  determiningRandomPosition() {
      let random = Math.floor(
        Math.random() * (this.collection.length - 1 + 1) + 1
      );
    return random
  }

  insertGoblin(randomPosition) {
      this.position = randomPosition;
      this.element = this.collection[this.position - 1];
      this.goblinRemoval();
      this.element.insertAdjacentHTML(
        "beforeend",
        '<img class="img" src='+ goblin +'>'
      );
      this.previousElement = this.element;
  }

  goblinRemoval() {
    if (this.previousElement !== null) this.previousElement.innerHTML = "";
  }

  scoringPoints () {
    const pointValue = document.querySelector('.point_value');

    pointValue.textContent = this.points += 1;
  }

  loss() {
    const losingPointsValue = document.querySelector('.losingPoints_value');
    let btn = document.querySelector('.btn');

    losingPointsValue.textContent = this.losingPoints -= 1;

    if(this.losingPoints === 0) {
      alert("Вы проиграли!!!");
      btn.classList.remove('btn__none');
      clearTimeout(this.setIntervalOne);
      clearTimeout(this.setIntervalTwo);
    }
  }
}