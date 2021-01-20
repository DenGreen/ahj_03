export default class ContentEvent {
    constructor(gamePlay) {
        this.gamePlay = gamePlay;
    }

    accrualPoints() {
        this.gamePlay.points += 1;
    }

    loss() {
        console.log('loss')
    }
}