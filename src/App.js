import React, { Component } from 'react'

import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
         <form >
            <div >
              <p >
                <input 
                  type="text"
                  placeholder="Enter username or email"
                                 />
              </p>
            </div>
            <div >
              <p >
                <input 
                  type="text"
                  placeholder="Enter password"
                                 />
              </p>
            </div>
           
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
            </div>
          </form>
        
      </div>
    )
  }
}


