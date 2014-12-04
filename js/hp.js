Hp = function(){
	this.cur = 1;
	this.max = 1;
}

/*===========================================================================*/

Hp.prototype = {
	addHealth: function(value){
		this.setCurrentHealth(this.cur + value);
	},
	subHealth: function(value){
		this.setCurrentHealth(this.cur - value);
	},
	setCurrentHealth: function(value){
		if(value < 0)
			value = 0;
		else if(value > this.max)
			value = this.max;
		this.cur = value;
	},
	///////////////////////////////////////////////////////////////////////////
	addMaxHealth: function(value){
		this.setMaxiumHealth(this.max + value);
	},
	subMaxHealth: function(value){
		this.setMaxiumHealth(this.max - value);
	},
	setMaxiumHealth: function(value){
		if(value < 1)
			value = 1;
		this.max = value;
	},
	///////////////////////////////////////////////////////////////////////////
	toString: function(){
		return this.cur.toFixed(0) + '/' + this.max.toFixed(0);
	},
	toPercentage: function(){
		return (this.cur/this.max)*100. + '%';
	}
}