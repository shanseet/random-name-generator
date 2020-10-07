import React from 'react';

class ChosenPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: ""
        }
        this.randomize = this.randomize.bind(this);
    }

    randomize() {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * this.props.names.length);
        } while (this.state.chosen === this.props.names[randomNum]);
        this.setState({ chosen: this.props.names[randomNum] });
    }

    render() {
        const bgOrange = { backgroundColor: "#f28123" };
        const bgGrey = { backgroundColor: "#777", cursor: "not-allowed" };

        const randBtn =
            <button className="rand-btn font-2"
                onClick={this.randomize}
                style={this.state.chosen ? bgOrange : this.props.names.length > 0 ? bgOrange : bgGrey}>
                randomize
            </button>

        return (
            <div className="box">
                {this.state.chosen ? this.state.chosen : "Add some names to begin!"}
                {randBtn}
            </div>
        )
    }
}

export default ChosenPerson;