import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
        <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">About NewsBulletin</h1>
          <p className="card-text">This is a News website which updates you with the latest news in India conatining different categories of News which you want or are interested in.</p>
          <a href="/" className="btn btn-primary">Home</a>
        </div>
        
      </div>
    )
  }
}

export default About