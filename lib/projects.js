import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      projects:{
        project:{
          title: "5.2-newsfeed-item",
          projectURL: "https://github.com/laurenaudry/5.2-newsfeed-item",
          description: "Mockup of facebook article with comments"
        },
        project:{
          title: "3.2-form-builder",
          projectURL: "https://github.com/laurenaudry/3.2-form-builder",
          description: "Form build"
        }
      }
    }
  },

  render() {
    return (
      <main className="projects">
        <h1>Projects</h1>
      </main>
      // Not sure if this is right in this situation or if it belongs on other page.
      // {
      //   this.state.projects.map((project) => {
      //     return <project key={project.title} title={project.title} projectURL={project.projectURL} description={project.description}/>;
      //   })
      // }
    )
  }
})
