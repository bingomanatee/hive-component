var _ = require('underscore');

module.exports = function (params) {
	if (_.isArray(params)) {
		params = _.compact(params);
		params = _.reduce(params, function(p, o){
			if (_.isObject(o)){
				return _.defaults(p, o);
			} else {
				return p;
			}
		}, {})
	} else if (_.isObject(params)) {
		params = _.clone(params);
	} else {
		params = {};
	}
	return params;
};