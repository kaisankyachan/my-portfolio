import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li><a href="https://github.com/kaisankyachan">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kai-whitney-4489b6221">LinkedIn</a></li>
            <li><a href="https://stackoverflow.com/users/17214418/">Stack Overflow</a></li>
          </ul>
        </div>
      </div>
    </footer>
    );
  }
}