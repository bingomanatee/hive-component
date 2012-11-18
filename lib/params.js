var _ = require('underscore');

module.exports = function (params) {
	if (_.isArray(params)) {
		params = _.reduce(params, function(p, o){
			return _.defaults(p, o);
		}, {})
	} else if (_.isObject) {
		params = _.clone(params);
	} else {
		params = {};
	}
	return params;
};