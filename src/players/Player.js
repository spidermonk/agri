const GameObject = require('../game').GameObject;
const util = require('util');

function Player(name) {
	GameObject.call(this);
	this.name = name;
}

util.inherits(Player, GameObject);

module.exports = Player;