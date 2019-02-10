import React from 'react'
import { connect } from 'react-redux'
import Quote from '../quote'


const QuotesList = props =>  (
    <ul className="quotes-list">
     {
        props.list && props.list.length !== 0 && props.list.map( quote => {
          return (
            <li key={ quote.ID } className="quotes-list__item">
                <Quote data={ quote } />
            </li>
            )
        })
      }
    </ul>
    
)

const mapStateToProps = ({ quotes }) => ({
  list : quotes.quotes
})


export default connect(
  mapStateToProps
)(QuotesList)

