import React from 'react'

export default React.createClass({
  render() {
    return (
      <article className="article">
        <h2>{this.props.title}</h2>
        <a href>{this.props.projectURL}</a>
        <p>{this.props.description}</p>
      </article>
    )
  }
})
