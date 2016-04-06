import Timer from './model/Timer';
import TimerView from './vue/TimerView';

// on instancie un timer de 35s
var timer = new Timer(35);

// on instancie une vue pour le timer
// on lui donne le timer (modèle correspondant) à observer
var timerView = new TimerView(timer);

// on attache la vue sur le modèle
timer.attach(timerView);

// on lance le timer
timer.start();