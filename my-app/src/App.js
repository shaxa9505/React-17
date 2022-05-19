import React, { Component } from 'react';
import Form from './Form';
import Reg from './Reg';
import "./App.css"

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      reg: [
        {
          name: "Shohrux",
          number: 915699505
        },
        {
          name: "Bahodir",
          number: 902973757
        }
      ]
    }
  }

  inforReg = (post) => {
    const {reg} = this.state;
    reg.push(post)
    this.setState({reg})
    // console.log(this.state);
  }


  render() {
    return (
      <div>
          <Form addContact={this.state.reg}  />
          <Reg inforReg={this.inforReg} />
      </div>
    );
  }
}

export default App;