Perlin = function(seed){
	this.seed = seed;
}

Perlin.prototype = {
	noise: function(x){
		var div = 536870869; // Prime near MAX_INT/8
		x = x + (x * this.seed) + this.seed;
		x = x ^ (x << 8) ^ (x << 16) ^ (x << 24);
		x = x | 0;
		x = x % div;
		x = x / div;
		return x;
	},
	smoothNoise: function(x){
		return this.noise(x-1)/4 + this.noise(x)/2 + this.noise(x+1)/4;
	},
	perlin: function(x,p,n){
		var total = 0;
		//var p = 1; //persistence
		//var n = 1; //number of octaves
		for(var i = 0; i < n; i++){
			frequency = Math.pow(2,i);
			amplitude = Math.pow(p,i);
			total += smoothNoise(x * frequency) * amplitude;
		}
		return total;
	}
}