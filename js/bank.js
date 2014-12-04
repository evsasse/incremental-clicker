Bank = function(){
	this.cur = 0;
}

/*===========================================================================*/

Bank.prototype = {
	addValue: function(value){
		this.setCurrentValue(this.cur + value);
	},
	subValue: function(value){
		return this.setCurrentValue(this.cur - value);
	},
	setCurrentValue: function(value){
		if(!this.isPossibleToSub(value))
			return false;
		this.cur = value;

	},
	isPossibleToSub: function(value){
		return value > 0;
	},
	///////////////////////////////////////////////////////////////////////////
	toString: function(){
		return '$' + this.cur.toFixed(2);
	}
}