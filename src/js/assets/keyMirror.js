"use strict";
var keyMirror = function (obj, base) {
	base = base || '';
	var ret = {};
	var key;
	if (!(obj instanceof Object && !Array.isArray(obj))) {
		throw new Error('keyMirror(...): Argument must be an object.');
	}
	for (key in obj) {
		if (!obj.hasOwnProperty(key)) {
			continue;
		}
		// Recursive
		if (obj[key] instanceof Object && !Array.isArray(obj)) {
			ret[key] = keyMirror(obj[key], base + key + '.');
		}
		else ret[key] = new KeyMirrorEntry(base + key);
	}
	return ret;
};

function KeyMirrorEntry(type) {
	this.type = type;
}
KeyMirrorEntry.prototype.toString = function toString() {
	return this.type;
};

module.exports = keyMirror;