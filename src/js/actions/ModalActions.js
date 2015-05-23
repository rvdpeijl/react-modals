var Dispatcher = require('../dispatcher/GlobalDispatcher');
var Constants = require('../constants/constants');
var _ = require('lodash');

var ModalActions = {
	openModal: function (identifier) {
		Dispatcher.dispatch({
			actionType: Constants.modal.OPEN_MODAL,
			identifier: identifier
		})
	},
	closeModal: function () {
		Dispatcher.dispatch({
			actionType: Constants.modal.CLOSE_MODAL
		})
	}
};

module.exports = ModalActions;