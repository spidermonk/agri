const EventEmitter = require('events');
const util = require('util');

function GameObject(game) {
	EventEmitter.call(this);
	this.game = game;
	this.game.addGameObject(this);
}

util.inherits(GameObject, EventEmitter);

module.exports = GameObject;

GameObject.prototype.init = function() {
	console.log('Initializing %s', this);
};

GameObject.prototype.startGame = function() {
	console.log('Starting game for %s', this);
};

GameObject.prototype.remove = function() {
	console.log('Removing %s from the game', this);
	this.game.removeGameObject(this);
};

GameObject.prototype.toString = function() {
	return this.constructor.name;
};