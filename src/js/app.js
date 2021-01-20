import EventList from './EventList';
import GamePlay from './GamePlay';

const gamePlay = new GamePlay();
gamePlay.init();

const eventList = new EventList(gamePlay);
eventList.addCellEnterListener();