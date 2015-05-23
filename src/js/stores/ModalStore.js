var Dispatcher = require('../dispatcher/GlobalDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Constants = require('../constants/constants');
var _ = require('lodash');

var ModalStore = assign({}, EventEmitter.prototype, {

	currentModalId: null

});

// Register to handle all updates
Dispatcher.register(function (payload) {
	console.log('Store received', payload.actionType.type);
	switch (payload.actionType) {

		case Constants.modal.OPEN_MODAL:
			ModalStore.currentModalId = payload.identifier;
			break;

		case Constants.modal.CLOSE_MODAL:
			ModalStore.currentModalId = null;
			break;

		default:
			return true;
	}

	ModalStore.emit(payload.actionType);
	return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = ModalStore;