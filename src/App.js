import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">

          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item">Sign In</a>
            <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
          </div>

          <div className="FormTitle">
            <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
          </div>

          <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              
              {/*FULL NAME*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
              </div>
              
              {/*PASSWORD*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
              </div>

              {/*E-MAIL ADDRESS*/}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
              </div>

              {/*CHECKBOX*/}
              <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I aggree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
              </label>



            </form>
          </div>
  
        </div>
      </div>
    )
  }
}

export default App;
