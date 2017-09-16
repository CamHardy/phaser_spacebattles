'use strict';

var PlayState = {};

PlayState.init = function () {
	// init input
};

PlayState.create = function () {
	// create level
	var background = game.add.sprite(0, 0, 'background');
	background.width = game.width;
	background.height = game.height;

	// TODO: need one array of ships (player's and opponent's)
	// for now place them manually
	var ship1 = game.add.sprite(100, 100, 'ship');
	ship1.anchor.set(0.5, 0.5);
	ship1.width = 50;
	ship1.height = 37;
	ship1.inputEnabled = true;
	ship1.input.enableDrag();
	ship1.input.pixelPerfectClick = true;
	ship1.input.boundsRect = background;

	var ship2 = game.add.sprite(150, 100, 'ship');
	ship2.inputEnabled = true;
	ship2.input.enableDrag();
	ship2.input.pixelPerfectClick = true;
	ship2.input.boundsRect = background;
};

PlayState.update = function () {
	// handle input
	// update stuff
}