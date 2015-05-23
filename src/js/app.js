var Dispatcher = require('flux');
var React = require('react/addons');

var Modal = require('./components/modal');
var ModalActions = require('./actions/ModalActions');

var App = React.createClass({
	openModal(identifier) {
		ModalActions.openModal(identifier);
	},
	renderModal(identifier, index) {
		return (
			<Modal key={index} identifier={identifier}>
				<p>This is some modal content</p>
			</Modal>
		);
	},
	render() {

		var modals = ['fade'];

		return (
			<div>
				<button onClick={this.openModal.bind(this, 'fade')}>Click me</button>
				{modals.map(this.renderModal)}
			</div>
		);
	}
});

React.render(<App/>, document.getElementById('app'));