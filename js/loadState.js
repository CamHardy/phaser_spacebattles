'use strict';

var LoadState = {};

LoadState.preload = function () {
	// load assets
	game.load.image('background', 'assets/images/background_blue.png');
	game.load.image('ship', 'assets/images/ship_blue.png');
	game.load.image('ship1', 'assets/images/ship1.png');
	game.load.image('ship2', 'assets/images/ship2.png');
	game.load.image('ship3', 'assets/images/ship3.png');
	game.load.image('ship4', 'assets/images/ship4.png');
	game.load.image('ship5', 'assets/images/ship5.png');
	game.load.image('ship6', 'assets/images/ship6.png');
	game.load.image('ship7', 'assets/images/ship7.png');
	game.load.image('ship8', 'assets/images/ship8.png');
	game.load.image('ship9', 'assets/images/ship9.png');
};

LoadState.create = function () {
	// start the game
	game.state.start('setup');
};