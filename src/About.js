import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About extends Component {
  render() {
    return (
        <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">About NewsBulletin</h1>
          <p className="card-text my-4">This is a News website which updates you with the latest news in India conatining different categories of News which you want or are interested in.</p>
          <div class="accordion my-4" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Categories of NewsBulletin</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        NewsBulletin provides you with <strong>7</strong> categories through which you will be upadated with the latest news. Categories are General, Business, Entertainment, Science, Health, Sports and Technology.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Traverse through Countries</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        You can get Updates of the Desired Country you want. You just have to write the 2 Digit ISO Code of the Country. The Default country set in the NewsBulletin is India.
      </div>
    </div>
  </div>
</div>
          <Link  to="/" className="btn btn-primary my-3">Home</Link>
        </div>
        
      </div>
    )
  }
}

export default About