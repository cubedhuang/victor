exports = module.exports = Vector;

function Vector (x, y) {
	if (!(this instanceof Vector)) {
		return new Vector(x, y);
	}

	this.x = x || 0;
	this.y = y || 0;
};

Vector.random = function (maxX, maxY) {
	var x = Math.floor(Math.random() * maxX),
		y = Math.floor(Math.random() * maxY);

	return new Vector(x, y);
};

Vector.prototype.copy = function (vec) {
	return new Vector(this.x, this.y);
};

Vector.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

Vector.prototype.sub = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

Vector.prototype.divide = function (vec) {
	this.x /= vec.x;
	this.y /= vec.y;
	return this;
};

Vector.prototype.multiply = function (vec) {
	this.x *= vec.x;
	this.y *= vec.y;
	return this;
};

Vector.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

Vector.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

Vector.prototype.distance = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return Math.sqrt(dx * dx + dy * dy);
};

Vector.prototype.length = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

Vector.prototype.randomize = function (maxX, maxY) {
	var x = Math.floor(Math.random() * maxX),
		y = Math.floor(Math.random() * maxY);

	return new Vector(x, y);
};

Vector.prototype.randomizeX = function (max) {
	var x = Math.floor(Math.random() * max);
	this.x = x;
	return this;
};

Vector.prototype.randomizeY = function (max) {
	var y = Math.floor(Math.random() * max);
	this.y = y;
	return this;
};

Vector.prototype.randomizeAny = function (maxX, maxY) {
	if (!! Math.round(Math.random() * 1)) {
		this.randomizeX(maxX);
	} else {
		this.randomizeY(maxY);
	}
	return this;
};

Vector.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

Vector.prototype.unfloatCopy = function () {
	return new Vector(Math.round(this.x), Math.round(this.y));
};
