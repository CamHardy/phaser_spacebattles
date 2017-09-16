'use strict';

var game = new Phaser.Game(700, 700, Phaser.AUTO, 'game');
game.state.add('play', PlayState);
game.state.add('load', LoadState);
game.state.start('load');