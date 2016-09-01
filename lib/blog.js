 import React from 'react'
import { Link } from 'react-router'

 export default React.createClass({
   render() {
     return (
     <main className="blog">
      <Link className="navLink" to="/">Go Back Home</Link>
      <h1>Front End Engineering warmup question</h1>
        <article className="blog-article">
          <h2>What is code?</h2>
            <p>Code is a language. It is the language computers speak and in order to tell them what to do you have to know how to speak it. Just like people have many different languages, so does your computer. There are many languages that come up when you look into what code is. Languages like Java, JavaScript, Perl, PHP, Python, Ruby and more. If you want to be able to communicate your needs to a computer, learning one of these is the first step. And since jobs these days are all leaning that way towards computers it is a big important step to take.
            The job network is leaning strongly towards software development these days as more and more things are becoming automated. Learning to code can be a great career that will last a lifetime and always keep you learning more. I read on 'http://www.economist.com/blogs/economist-explains/2015/09/economist-explains-3 “As Marc Andreessen, the co-creator of the Netscape web browser, likes to say, in future there will be two kinds of jobs: those that involve telling computers what to do, and those that involve being told what to do by computers. Worried that your job is in danger of being automated away by software? Learning to code could be a useful insurance policy. Even if you’re not, it can also be fun.” '
            Code is the future. They are even coming out with toys designed to teach children the basics of coding at a young age so they can grow with an interest in software development. But teaching girls and boys. "When you ask kids in elementary schools how many of them were interested in technology, you see an equal number of boys and girls raise their hands," Gupta said. "By middle school, that's dropped." It is important that we get girls interested in this early on as well. 'http://www.cnbc.com/2015/08/04/the-toys-that-could-help-close-silicon-valleys-gender-gap.html</p>'
        </article>
      </main>
    )
   }
 })
