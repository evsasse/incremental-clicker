Game = function(){
	this.bank; // new Bank();
	this.hp; // new Hp();
}

/*===========================================================================*/

Game.prototype = {
	init: function(){
		this.bank = new Bank();
		this.hp = new Hp();


	}
}

var game = new Game();