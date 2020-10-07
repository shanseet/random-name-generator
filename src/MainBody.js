import React from 'react';
import Person from './Person';
import ChosenPerson from './ChosenPerson';

class MainBody extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: "",
            names: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeName = this.removeName.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value) {
            this.setState(prevState => ({
                names: [...prevState.names, this.state.value]
            }))
            this.setState({ value: "" });
        }
    }

    removeName(index) {
        const tempNames = this.state.names;
        tempNames.splice(index, 1);
        this.setState({ names: tempNames });
    }

    render() {
        let nameList = this.state.names.map((name, i) => {
            return (
                <Person key={i} name={name} index={i} removeName={this.removeName} />
            )
        });

        return (
            <div style={{ maxWidth: "40em", margin: "auto" }}>
                {<ChosenPerson names={this.state.names} />}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="add someone" />
                    <button type="submit" className="submit-btn">+</button>
                </form>

                {nameList}
            </div>
        )
    }
}

export default MainBody;