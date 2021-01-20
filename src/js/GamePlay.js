export default class GamePlay {
  constructor() {
    this.position = null;
    this.element = null;
    this.previousElement = null;
    this.collection = document.querySelectorAll(".field_li");
    this.points = 0;
    this.losingPoints = 5;
  }

  init() {
    setInterval(this.checkingPosition.bind(this), 3000);
  }

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
        '<img class="img hummer" src="https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true">'
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

    if(this.losingPoints === 0) {
      alert("Вы проиграли!!!")
    } else {
      losingPointsValue.textContent = this.losingPoints -= 1;
    }
  }
}