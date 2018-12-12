import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.linkRef = React.createRef()
    this.focusLink = this.focusLink.bind(this)
  }

  focusLink(e) {
    this.linkRef.focus()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <h1>Hi people</h1>
        <p>This is an example of using Gatsby Link's `innerRef` prop.</p>
        <p>View the source for this site at </p>
        <p>Click the button to focus the link</p>
        <input
          className="button"
          onClick={this.focusLink}
          type="button"
          value="Focus the link"
        />
        <Link
          className="link"
          innerRef={el => {
            this.linkRef = el
          }}
          to="/page-2/"
        >
          Go to page 2
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
