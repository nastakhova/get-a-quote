import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../../sdk/button'
import QuotesList from '../../sdk/quotes-list'
import { fetchQuote } from '../../modules/quotes'

const Home = props => (
  <React.Fragment>
    <h1>Get quote of day</h1>
    <div className="header-main">
      <p>Quotes: {props.count}</p>
      <Button type="add" text="Add more quotes" cb={() => props.fetchQuote()} />
    </div>
    <QuotesList />
    {props.error && <p>Upppssss... Something goes wrong ...</p>}
  </React.Fragment>
)

const mapStateToProps = ({ quotes }) => ({
  count: quotes.count,
  error: quotes.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuote
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
