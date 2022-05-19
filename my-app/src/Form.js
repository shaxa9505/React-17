import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        addContact: PropTypes.array
    }

    state = {
        filterText: ""
    }

    changeClick = (e) => {
        this.setState({filterText: e.target.value})
    }

    render(props) {

        const filterTextname = this.props.addContact.filter(
            contact => (
                contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
            )
        )

        return (
            <div className="form">
            <input type="text" onChange={this.changeClick} placeholder="Your name" value={this.state.filterText} />
                {filterTextname.map((item, key) => (
                        <li key={key}>
                            <span>{item.name}</span>
                            <span>{item.number}</span>
                        </li>
                ))}
            </div>
        )
    }
}

export default Form