import React from 'react'
import Project from './projectsDetail'

export default React.createClass({
  getDefaultProps() {
    return {
      projects:[
        {
          title: "5.2-newsfeed-item",
          projectURL: "https://github.com/laurenaudry/5.2-newsfeed-item",
          description: "Mockup of facebook article with comments"
        },
        {
          title: "3.2-form-builder",
          projectURL: "https://github.com/laurenaudry/3.2-form-builder",
          description: "Form building practice using API's and XHR requests"
        }
      ]
    }
  },

  render() {
    return (
      <main className="projects">
        <h1>Projects</h1>
      {
        this.props.projects.map((project) => {
          return <Project key={project.title} title={project.title} projectURL={project.projectURL} description={project.description}/>;
        })
      }
      </main>
    )
  }
})
