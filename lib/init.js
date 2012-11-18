var _ = require('underscore');
var events = require('events');
var util = require('util');
var fs = require('fs');
var path = require('path');
var Gate = require('gate');
var async = require('async');

module.exports = function (self, callback, tasks) {

	if (!tasks){
		if (!self._init_tasks){
			self._init_tasks = [];
		}
		tasks = self._init_tasks;
	}

    var wf = _.map(tasks, function(task){
	    return _.bind(task, self)
    });

    async.waterfall(wf, callback);

}