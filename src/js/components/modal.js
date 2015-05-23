var React = require('react/addons');
var Constants = require('../constants/constants');
var ModalActions = require('../actions/ModalActions');
var ModalStore = require('../stores/ModalStore');

var classSet = React.addons.classSet;

function getState() {
	return {
		currentModalId: ModalStore.currentModalId
	}
}

var ModalContent = React.createClass({
	mixins: [
		require('react-onclickoutside')
	],
	handleClickOutside: function(evt) {
		ModalActions.closeModal();
	},
	render() {
		return <div className='content'>{this.props.children}</div>
	}
});

var Modal = React.createClass({
	getInitialState() {
		return getState();
	},
	componentDidMount() {
		ModalStore.on(Constants.modal.OPEN_MODAL, this.onChange);
		ModalStore.on(Constants.modal.CLOSE_MODAL, this.onChange);
	},
	componentWillUnmount() {
		ModalStore.removeListener(Constants.modal.OPEN_MODAL, this.onChange);
		ModalStore.removeListener(Constants.modal.CLOSE_MODAL, this.onChange);
	},
	onChange() {
		this.setState(getState());
	},
	render() {

		var classes = classSet({
			modal: true,
			active: this.state.currentModalId === this.props.identifier
		});

		return (
			<div className={classes}>
				<div className='backdrop'>
					<ModalContent children={this.props.children}/>
				</div>
			</div>
		);
	}
});

module.exports = Modal;