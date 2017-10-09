'use strict';

var game = new Phaser.Game(700, 700, Phaser.AUTO, 'game');
//game.state.add('combat', CombatPhase);
//game.state.add('activation', ActivationPhase);
//game.state.add('planning', PlanningPhase);
game.state.add('setup', SetupState);
game.state.add('load', LoadState);
game.state.start('load');