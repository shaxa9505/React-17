import React, { Component } from 'react';

class Reg extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            number: ""
        }
    }

    changeClick = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    Submit = (e) => {
        e.preventDefault();
        const post = {...this.state}
        this.props.inforReg(post)
        
        this.setState({name: "", number: ""})
    }
    
    

    render(props) {
        return (
            <form action="" onSubmit={this.Submit}>
                <input type="text" name="name" onChange={this.changeClick} value={this.state.name} placeholder="Your name" /> <br /> <br />
                <input type="text" name="number" onChange={this.changeClick} value={this.state.number} placeholder="Your phone number" /> <br /> <br />
                <button className="button">Send</button> <br /> <br />
            </form>
        );
    }
}

export default Reg;