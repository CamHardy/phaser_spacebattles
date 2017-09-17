'use strict';

var PlayState = {};

PlayState.init = function () {
	// init input
};

PlayState.create = function () {
	// create level
	let background = game.add.sprite(0, 0, 'background');
	background.width = game.width;
	background.height = game.height;

	// TODO: need one array of ships (player's and opponent's)
	// for now place them manually
	this.ship1 = game.add.sprite(100, 100, 'ship');
	this.ship1.anchor.set(0.5, 0.5);
	this.ship1.width = 50;
	this.ship1.height = 37;
	this.ship1.inputEnabled = true;
	this.ship1.input.enableDrag(false, true);
	this.ship1.input.pixelPerfectClick = true;
	this.ship1.input.boundsRect = background;
	game.physics.enable(this.ship1);
	this.ship1.events.onInputDown.add(function () {this.ship1.alpha = 0.3; this.ship1.body.enable = false;}, this);
	this.ship1.events.onInputUp.add(function () {this.ship1.alpha = 1; this.ship1.body.enable = true;}, this);

	this.ship2 = game.add.sprite(150, 100, 'ship');
	this.ship2.inputEnabled = true;
	this.ship2.input.enableDrag(false, true);
	this.ship2.input.pixelPerfectClick = true;
	this.ship2.input.boundsRect = background;
	game.physics.enable(this.ship2);
	this.ship2.events.onInputDown.add(function () {this.ship2.alpha = 0.3; this.ship2.body.enable = false;}, this);
	this.ship2.events.onInputUp.add(function () {this.ship2.alpha = 1; this.ship2.body.enable = true;}, this);
};

PlayState.update = function () {
	// handle input
	// update stuff
	game.physics.arcade.overlap(this.ship1, this.ship2, this._resolveOverlap, null, this);
}

PlayState._resolveOverlap = function () {
	console.log('Overlap AAAAAAAAAAAAA');
}