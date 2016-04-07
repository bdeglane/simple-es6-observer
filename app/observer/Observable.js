export default class Observable {
	constructor() {
		this.observers = [];
	}

	attach(observer) {
		this.observers.push(observer);
	}

	dettach(observer) {
		this.observers.splice(this.observers.indexOf(observer), 1);
	}

	// la méthode notify indique de mettre à jour
	// les classes que contient le tableau observers
	notify() {
		for (let observer in this.observers) {
			this.observers[observer].update();
		}
	}
}