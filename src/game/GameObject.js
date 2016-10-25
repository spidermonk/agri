const EventEmitter = require('events');
const util = require('util');

function GameObject(game) {
	EventEmitter.call(this);
	this.game = game;
}

util.inherits(GameObject, EventEmitter);

module.exports = GameObject;

GameObject.prototype.init = function() {
	console.log('Initializing %s', this);
};

GameObject.prototype.startGame = function() {
	console.log('Starting game for %s', this);
}