Game = function(){
	this.bank = 0;
	this.alltime = 0;

	this.hp = 1;
	this.maxHp = 1;

	this.updateIntervalTime = 0;
}
Game.prototype = {
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

	heal: function(value){
		this.setHp(this.hp + value);
	},
	injure: function(value){
		this.setHp(this.hp - value);
	},
	setHp: function(value){
		if(value > this.maxHp)
			this.hp = this.maxHp;
		else if(value < 0)
			this.hp = 0;
		else
			this.hp = value;
	},
	setMaxHp: function(value){

	},

	update: function(){
		this.bank_.innerHTML = this.bank.toFixed(2);

		this.hp_.innerHTML = this.hp.toFixed(0) + '/' + this.maxHp.toFixed(0);
		this.hp_.style.background = 'linear-gradient(110deg, #C0392B '+ (this.hp/this.maxHp)*100 +'%, transparent 0), #80261D';
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
		this.hp_ = document.getElementById('hp');
	}
}

var game = new Game();