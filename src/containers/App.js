import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {

	render() {
		return (
			<div>
				<button onClick={this.props.decrease}>-</button>
						{console.log(this.props)}
					<span>{this.props.count}</span>
				<button onClick={this.props.increase}>+</button>
			</div>
		)
	}
}


function mapStateToProps(state){
	return {
		count: state.count
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({increase: increaseCounter, decrease: decreaseCounter}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
