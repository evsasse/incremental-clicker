Game = function(){
	this.bank = 0;
	this.alltime = 0;

	this.updateIntervalTime = 0;
}
Game.prototype = {
	update: function(){
		this.bank_.innerHTML = this.bank.toFixed(2);
	},

	earn: function(value){
		this.bank += value;
		this.alltime += value;
	},

	spend: function(value){
		if(this.bank < value)
			return false; // Insufficient funds
		this.bank -= value;
		return true;
	},

	setUpdateInterval: function(value){
		if(this.updateInterval)
			clearInterval(this.updateInterval);
		this.updateInterval = setInterval(function(){game.update()},value);
		this.updateIntervalTime = value;
	},

	init: function(){
		this.setUpdateInterval(50);
		this.bank_ = document.getElementById('value_');
	}
}

var game = new Game();