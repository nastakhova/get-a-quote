import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditQuote from '../edit-quote'
import Button from '../button'
import { removeQuote, editQuote } from '../../modules/quotes'

const Quote = props => (
	props && props.data ? <React.Fragment>
		<Button id={props.data.ID} cb= { () => props.removeQuote(props.data.ID) } type='remove' text='x' />
		<blockquote  className="quotes-list__quote">
			<div className="quotes-list__content" dangerouslySetInnerHTML={{ __html: props.data.content }} />
			<div className="quotes-list__footer">
				<Button id={props.data.ID} cb={ () => props.editQuote(props.data.ID) } type='edit' />
				<cite className="quotes-list__cite"><a href={props.data.link} rel="noopener noreferrer" target="_blank">{ props.data.title }</a></cite>
			</div>
		</blockquote>
		{props.flag && props.activeId === props.data.ID  && <EditQuote data={ props.data } />}
	</React.Fragment> : <p>Uppss... Something goes wrong!</p>
)

const mapStateToProps = ({ quotes }) => ({
  flag : quotes.edit,
  activeId: quotes.activeId
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
  	removeQuote,
  	editQuote 
  }, dispatch )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)
