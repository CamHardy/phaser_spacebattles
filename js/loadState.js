'use strict';

var LoadState = {};

LoadState.preload = function () {
	// load assets
	game.load.image('background', 'assets/images/background_blue.png');
	game.load.image('ship', 'assets/images/ship_blue.png');
};

LoadState.create = function () {
	// start the game
	game.state.start('play');
};