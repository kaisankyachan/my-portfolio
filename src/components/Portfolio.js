import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
          <h1 class="sectionh"><span>Portfolio</span></h1>
            <div className="item-wrap">

              {/* PROJECTS */}
                <div className="overlay">
                <a href="https://kaisankyachan.github.io/Password-Generator/">
              {<img src='images/password-generator.png' className="item-img" alt="application"/>}
                  <div className="portfolio-item-meta">
                    <h5>Password Generator</h5>
                    <a href="https://github.com/kaisankyachan/Password-Generator">GitHub Repository</a>
                  </div>
                  </a>
                </div>
                <div className="overlay">
                <a href="https://kaisankyachan.github.io/code-quiz/">
              {<img src='images/code-quiz.png' className="item-img" alt="application"/>}
                  <div className="portfolio-item-meta">
                    <h5>Code Quiz</h5>
                    <a href="https://github.com/kaisankyachan/code-quiz">GitHub Repository</a>
                  </div>
                  </a>
                </div>
                <div className="overlay">
                <a href="https://kaisankyachan.github.io/git-it-done/">
              {<img src='images/work-day.png' className="item-img" alt="application"/>}
                  <div className="portfolio-item-meta">
                    <h5>Work Day Scheduler</h5>
                    <a href="https://github.com/kaisankyachan/git-it-done">GitHub Repository</a>
                  </div>
                  </a>
                </div>
                <div className="overlay">
                <a href="https://kaisankyachan.github.io/weather-dashboard/">
              {<img src='images/weather-dashboard.png' className="item-img" alt="application"/>}
                  <div className="portfolio-item-meta">
                    <h5>Weather Dashboard</h5>
                    <a href="https://github.com/kaisankyachan/weather-dashboard">GitHub Repository</a>
                  </div>
                  </a>
                </div>
                <div className="overlay">
                <a href="https://dhalladay.github.io/travel-app-events/">
              {<img src='images/chrip.png' className="item-img" alt="application"/>}
                  <div className="portfolio-item-meta">
                    <h5>Chrip</h5>
                    <a href="https://github.com/dhalladay/travel-app-events">GitHub Repository</a>
                  </div>
                  </a>
                </div>
                <div className="overlay">
                <a href="https://note-taker-kaiwhitney.herokuapp.com/">
              {<img src='images/note-taker.png' className="item-img" alt="application"/>}
                  <div className="portfolio-item-meta">
                    <h5>Note Taker</h5>
                    <a href="https://github.com/kaisankyachan/note-taker/blob/main/README.md">GitHub Repository</a>
                  </div>
                  </a>
                </div>
            </div>
          </div>
        </section>
      );
  }
}