import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import News from './News'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="/about">NewsBulletin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>

              <div className="searcbox">
              {/* <form className="d-flex mx-4" role="search"> */}
              {/* <div className="d-flex mx-4">
                <input id="city" onChange={this.changeval} className="form-control me-2" type="search" placeholder="Country ISO code" aria-label="Search"/>
                <button className="btn btn-outline-success" onClick={this.countryChange} type="submit" id="submit">Search</button>
                </div> */}
            {/* </form> */}
            </div>

              <div className={`form-check form-switch text-${this.props.mode==='light'? 'dark': 'light'}`} >
              
        
        </div>
              
              
             
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar