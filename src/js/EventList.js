export default class EventList {
  constructor(gamePlay) {
    this.field = document.querySelector("#field");
    this.gamePlay = gamePlay;
  }

  addCellEnterListener() {
    this.field.addEventListener("click", (event) => {
        const img = event.target.closest(".img");
            if(img) {
              this.gamePlay.scoringPoints();
            } else {
              this.gamePlay.loss();
            };
        this.gamePlay.click = true;
    });
  }
}
