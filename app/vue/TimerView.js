import Observer from '../observer/Observer';

// cette classe devrait implémenter l'interface Observer
export default class TimerView extends Observer {
	constructor(timer) {
		super();
		this.timer = timer;
		this.el = document.getElementById('timer');
	}

	update() {
		this.el.innerHTML = this.render();
	}

	render() {
		return (
			'<div class="timer">' +
				'<p>' + this.timer._duree + '</p>' +
			'</div>'
		)
	}
}