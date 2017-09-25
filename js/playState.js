'use strict';

var PlayState = {};

PlayState.init = function () {
	// init input
};

PlayState.create = function () {
	// create level
	this.background = game.add.sprite(0, 0, 'background');
	this.background.width = game.width;
	this.background.height = game.height;

	this.ships = game.add.group();
	this.ship1 = new Ship(game, 100, 100);
	this.ships.add(this.ship1);
	this.ship2 = new Ship(game, 200, 100);
	this.ships.add(this.ship2);
};

PlayState.update = function () {
	// handle input
	// update stuff
	game.physics.arcade.overlap(this.ships, this.ships, this._resolveShipOverlap, null, this);
}

PlayState._resolveShipOverlap = function (ship1, ship2) {
	let p1 = new Phaser.Point(ship1.x, ship1.y);
	let p2 = new Phaser.Point(ship2.x, ship2.y);
	let dir = new Phaser.Point(p1.x - p2.x, p1.y - p2.y).normalize();
	ship1.body.velocity.x = 1000*dir.x;
	ship1.body.velocity.y = 1000*dir.y;
	ship2.body.velocity.x = 0;
	ship2.body.velocity.y = 0;
}