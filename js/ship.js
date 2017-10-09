'use strict';

function Ship(game, x, y, key, group) {
	Phaser.Sprite.call(this, game, x, y, key);
	this.selected = false;
	this.invalid = false;

	// anchor point
	this.anchor.set(0.5, 0.5);

	// animations

	// properties
	this.inputEnabled = true;
	this.input.enableDrag(false, true);
	this.input.pixelPerfectClick = true;
	this.input.boundsRect = SetupState.background;
	this.input.dragDistanceThreshold = 8;

	game.physics.enable(this);
	this.body.collideWorldBounds = true;

	// events
	this.events.onInputDown.add(function () {
		this.alpha = 0.3; 
		group.forEach(function (ship) {
			ship.selected = false;
		}, this);
		this.selected = true;}, this);
	this.events.onInputUp.add(function () {
		//this.selected = false;
		this.alpha = 1;}, this);

	group.add(this);
}

// inherit from Phaser.Sprite
Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function () {
	// drag
	this.body.velocity.x =  this.body.velocity.x * 0.5;
	this.body.velocity.y =  this.body.velocity.y * 0.5;

	if (this.invalid) {
		this.tint = 0xff0000;
	}
	else this.tint = 0xffffff;
}