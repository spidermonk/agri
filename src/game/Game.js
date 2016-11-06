const util = require('util');
const gameEvents = require('./GameEvents');

function Game() {
	this.gameObjects = [];
}

module.exports = Game;

Game.prototype.startGame = function() {
	this.gameObjects.forEach(function(gameObject) {
		gameObject.emit(gameEvents.startGame);
	});
};

Game.prototype.addGameObject = function(gameObject) {
	found = false;
	this.gameObjects.forEach(function(obj) {
		if(!found && gameObject === obj) {
			found = true;
		}
	});
	if(found) {
		return false;
	}
	console.log('Adding %s to Game', gameObject);
	this.gameObjects.push(gameObject);

	gameObject.on(gameEvents.startGame, gameObject.startGame);

	return true;
};

Game.prototype.removeGameObject = function(gameObject) {
	gameObject.removeListener(gameEvents.startGame, gameObject.startGame);

	index = -1;
	for(i = this.gameObjects.length-1; i>=0; i--) {
		if(this.gameObjects[i] === gameObject) {
			index = i;
			break;
		}
	}

	if(index >= 0) {
		this.gameObjects.splice(index, 1);
	}
};