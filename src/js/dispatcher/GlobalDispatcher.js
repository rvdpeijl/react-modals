var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

/**
 * Flux advocates the use of a single, global dispatcher. We have several dispatchers, mainly because we didn't understand flux
 * very well. This is the global dispatcher, and should really be the only single dispatcher that is used ... ever.
 * @type {{register: function(function(*)), dispatch: function(*)}}
 */
var globalDispatcher = new Dispatcher();

module.exports = globalDispatcher;