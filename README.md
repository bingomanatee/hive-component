# Hive-Component

`hive-component` is an npm base class that serves as a factory for the `hive-mvc` and `hive-loader` npm modules.

## Usage

Hive Component is a factory to create custom components based on a `mixin` and `configuration`.
As an example say you want to design a compoennt to add, track and report tags. Tags in this example are lowercased strings,
and you can't have duplicate tags.

A component-using module for tags (`node_modules/tags.js') would be:

```
var hc = require('hive-component');

var _mixins =

module.exports = function(tags, cb){
	if (!tags){
		tags = [];

		hc(_mixin, {}, function(err, comp){
			if (err){
				return cb(err);
			}
			comp.add_tags(tags);
			cb(null, comp);
		}
	}
}
```

Using your custom compoent would look like this:

```
var Tags = require('tags');

Tags(['foo', 'bar'], function(err, tags){

	console.log('I have foo? %s', tags.has('foo') ? 'yes' : 'no');
	console.log('I have zoo? %s', tags.has('zoo') ? 'yes' : 'no');
	console.log(('I have

});

## Methods

### Extend

```
my_component.extend({count:

Extend mixes in the parameters into

