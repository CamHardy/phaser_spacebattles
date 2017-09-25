'use strict';

function Ship(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'ship');

	// anchor point
	this.anchor.set(0.5, 0.5);

	// animations

	// properties
	this.inputEnabled = true;
	this.input.enableDrag(false, true);
	this.input.pixelPerfectClick = true;
	this.input.boundsRect = PlayState.background;
	this.input.dragDistanceThreshold = 8;

	game.physics.enable(this);
	this.events.onInputDown.add(function () {this.alpha = 0.3; this.body.enable = false;}, this);
	this.events.onInputUp.add(function () {this.alpha = 1; this.body.enable = true;}, this);
}

// inherit from Phaser.Sprite
Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function () {
	// drag
	this.body.velocity.x =  this.body.velocity.x * 0.5;
	this.body.velocity.y =  this.body.velocity.y * 0.5;
}