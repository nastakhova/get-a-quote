import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../button'
import { saveQuote } from '../../modules/quotes'

class EditQuote extends React.Component {
	constructor(props){
		super();
		this.state = {
			inputValue : props.data.title,
			textareaValue : props.data.content
		}

		this.data = Object.assign({}, props.data);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		e.target.dataset.el === 'title' ? this.setState({inputValue : e.target.value}) : this.setState({textareaValue : e.target.value}); 
		this.data[e.target.dataset.el] = e.target.value;
	}

	render() {
		return (
			<React.Fragment>
				<div className='popup'>
					<h3>Edit</h3>
					<textarea 
						data-el='content'
						value={ this.state.textareaValue }
						onChange = { this.onChange }
						>
						{ this.state.textareaValue }
					</textarea>
					<input
						data-el='title'
						value={ this.state.inputValue }
						onChange = { this.onChange }
						type="text"
					 />
					<Button type="save" cb={ () => this.props.saveQuote(this.data) } />
				</div>
				<div className="popup__overlay" />
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
  	saveQuote, 
  }, dispatch )

export default connect(
  null,
  mapDispatchToProps
)(EditQuote)
