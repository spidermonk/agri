const test = require('unit.js');
const GameObject = require('../../src/game').GameObject;
const Game = require('../../src/game').Game;

describe('GameObject', function() {
	describe('initialization', function() {
		it('initialization should register as event listener', function() {
			var obj = new GameObject(new Game());
			obj.init();
		});
	});
	describe('stawrtGame', function() {
		it('startGame should do nothing', function() {
			var obj = new GameObject(new Game());
			obj.init();
			obj.startGame();
		});
	});
});