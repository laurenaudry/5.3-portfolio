import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <main className="portfolio__main">
         <h1 className="portfolio-name">
             Lauren Audry Johnson
          </h1>
            <p className="portfolio-bio">My Name is Lauren Johnson and I live in the beautiful city of San Antonio in the great state of Texas. I am currently attending the Iron Yard to learn to be a front end engineer. Things I am learning include HTML, CSS and JavaScript. When not coding at school I enjoy going around the city hunting pokemon and playing with my dog.</p>
             <ul className="portfolio__social-medias">
               <li><a className="portfolio__social-media" href="https://github.com/laurenaudry" target="_blank">Github</a></li>
             </ul>
            <nav className="navigation">
              <Link className="navLink" to="/blog">Blog</Link>
              <Link className="navLink" to="/projects">Projects</Link>
            </nav>
        </main>
      </div>
  )
  }
})
