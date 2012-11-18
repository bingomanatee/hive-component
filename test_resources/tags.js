var hc = require('./../index');
var config = require('hive-configuration');
var _ = require('underscore');
var util = require('util');
var _DEBUG  = true;

var _mixins = {
	add_tags: function (tags) {
		_.each(tags, _.bind(function (tag) {
			this.add_tag(tag);
		}, this));
	},

	add_tag: function (tag) {
		if (!tag){
			throw new Error('trying to add nothing')
		}
		if (!_.isString(tag)) {
			throw new Error('attempt to add non-string tag: %s', util.inspect(tag));
		}
		this._tags.set(tag.toLowerCase(), true);
	},

	tags: function () {
		// @NOTE: not best practice as it depends on internal structure of another module...
		return _.sortBy(_.keys(this._tags.data), _.identity);
	},

	remove_tag: function (tag) {
		if (!tag){
			throw new Error('trying to remove nothing')
		}
		if (!_.isString(tag)) {
			throw new Error('attempt to add non-string tag: %s', util.inspect(tag));
		}
		this._tags.remove(tag);
	},

	has: function(tag){
		if (!tag){
			throw new Error('trying to test nothing')
		}
		if (!_.isString(tag)) {
			throw new Error('attempt to test non-string tag: %s', util.inspect(tag));
		}

		console.log('has: this %s', util.inspect(this));
		console.log('has: _tags: %s', util.inspect(this._tags));
		return this._tags.has(tag);
	}
}

module.exports = function (tags, cb) {
	if (!tags) {
		tags = [];
	}

	var mixins = {
		_init_tasks: [function(cb){
			this._tags = new config();
			console.log(' _init_tasks this: %s', util.inspect(this));
			console.log('adding tags %s', util.inspect(tags));
		this.add_tags(tags);
			cb();
	}]}

	_.defaults(mixins, _mixins);

	return hc(mixins, {tags: new config()}, cb);
}