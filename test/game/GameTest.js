const assert = require('assert');
const GameObject = require('../../src/game').GameObject;
const Game = require('../../src/game').Game;

describe('Game', function() {
	describe('addGameObject', function() {
		it('Registered Game Objects should start empty', function() {
			var game = new Game();
			assert.equal(game.gameObjects.length, 0);
		});
		it('Adding one Game Object', function() {
			var game = new Game();
			var obj = new GameObject(game);
			//game.addGameObject(obj);
			assert.equal(game.gameObjects.length, 1);
			assert.deepEqual(game.gameObjects[0], obj);
			assert.equal(obj.listeners('startGame')[0], obj.startGame);
		});
		it('Adding two Game Objects', function() {
			var game = new Game();
			var obj1 = new GameObject(game);
			var obj2 = new GameObject(game);
			//game.addGameObject(obj1);
			//game.addGameObject(obj2);
			assert.equal(game.gameObjects.length, 2);
			assert.deepEqual(game.gameObjects[0], obj1);
			assert.deepEqual(game.gameObjects[1], obj2);
		});
		it('Duplicate adds should do nothing', function() {
			var game = new Game();
			var obj1 = new GameObject(game);
			//game.addGameObject(obj1);
			assert.equal(game.gameObjects.length, 1);
			game.addGameObject(obj1);
			assert.equal(game.gameObjects.length, 1);
		});
	});
	describe('removeGameObject', function() {
		it('Remove on an empty set should do nothing', function() {
			var game = new Game();
			assert.equal(game.gameObjects.length, 0);
			game.removeGameObject(new GameObject(game));
			assert.equal(game.gameObjects.length, 0);
		});
		it('Remove a matching Game Object with only one in list', function() {
			var game = new Game();
			var obj1 = new GameObject(game);
			//game.addGameObject(obj1);
			assert.equal(game.gameObjects.length, 1);
			assert.equal(obj1.listeners('startGame')[0], obj1.startGame);
			game.removeGameObject(obj1);
			assert.equal(game.gameObjects.length, 0);
			assert.equal(obj1.listeners('startGame').length, 0);
		});
		it('Remove middle Game Object from list', function() {
			var game = new Game();
			var obj1 = new GameObject(game);
			var obj2 = new GameObject(game);
			var obj3 = new GameObject(game);
			//game.addGameObject(obj1);
			//game.addGameObject(obj2);
			//game.addGameObject(obj3);
			assert.equal(game.gameObjects.length, 3);
			game.removeGameObject(obj2);
			assert.equal(game.gameObjects.length, 2);
			assert.deepEqual(game.gameObjects[0], obj1);
			assert.deepEqual(game.gameObjects[1], obj3);
		});
	});
	describe('startGame', function() {
		it('startGame with no GameObjects', function() {
			var game = new Game();
			game.startGame();
		});
		it('startGame with one GameObject', function(done) {
			var game = new Game();
			var obj1 = new GameObject(game);
			obj1.on('startGame', function() {
				done();
			});
			game.startGame();
		});
	});
});