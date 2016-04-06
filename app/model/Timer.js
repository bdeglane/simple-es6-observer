import Observable from '../observer/Observable';

// la classe timer est observable
// elle étends donc la class Observable
export default class Timer extends Observable {
	constructor(duree) {
		super();
		this._duree = duree;
	}

	countdown() {
		this._duree--;
		// la classe notifie un changement
		// méthode présente dans le parent
		this.notify();
	}

	start() {
		let timer = setInterval(()=> {
			this.countdown();
			if (this._duree <= 0) {
				clearInterval(timer);
			}
		}, 1000);
	}
}