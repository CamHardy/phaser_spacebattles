'use strict';

var SetupState = {};

SetupState.init = function () {
	// init input
	game.time.advancedTiming = true;
};

SetupState.create = function () {
	// create level
	this._spawnBackground();

	//this.button = game.add.button(500, 500, 'button', _onClick, this);

	this.ships = game.add.group();
	this._spawnShips();
};

SetupState.update = function () {
	// handle input
	// update stuff
	this.ships.forEach(function (ship) {ship.invalid = false;}, this);
	game.physics.arcade.overlap(this.ships, this.ships, this._resolveShipOverlap, null, this);
}

SetupState.render = function () {
	game.debug.text(game.time.fps || '--', 2, 14, '#cccccc');
	game.debug.text(game.input.activePointer.position, 2, 28, '#cccccc');
	this.ships.forEach(function (ship) {
		if (ship.selected) game.debug.body(ship);}, game.debug);
}

SetupState._spawnBackground = function () {
	this.background = game.add.sprite(0, 0, 'background');
	this.background.width = game.width;
	this.background.height = game.height;
	this.background.inputEnabled = true;
	
	this.background.events.onInputDown.add(function () {
		this.ships.forEach(function (ship) {
			ship.selected = false;
		}, this)
	}, this);
}

SetupState._spawnShips = function () {
	for (var x = 0; x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			this.ship = new Ship(game, 200*x + 100, 200*y + 100, 'ship' + game.rnd.between(1, 9), this.ships);
		}
	}
}

SetupState._resolveShipOverlap = function (ship1, ship2) {
	ship1.invalid = true;
	if (!game.input.activePointer.leftButton.isDown) {
		let p1 = new Phaser.Point(ship1.x, ship1.y);
		let p2 = new Phaser.Point(ship2.x, ship2.y);
		let dir = new Phaser.Point(p1.x - p2.x, p1.y - p2.y).normalize();
		ship1.body.velocity.x = 1000*dir.x;
		ship1.body.velocity.y = 1000*dir.y;
		ship2.body.velocity.x = 0;
		ship2.body.velocity.y = 0;
	}
}	