import React, { Component, PropTypes } from 'react';
class GradeItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let sum = parseFloat(this.props.chinese)
            + parseFloat(this.props.math)
            + parseFloat(this.props.english)
            + parseFloat(this.props.physic);
        return (
            <div className="list_item">
                <div>{this.props.name}</div>
                <div>{this.props.chinese}</div>
                <div>{this.props.math}</div>
                <div>{this.props.english}</div>
                <div>{this.props.physic}</div>
                <div>{sum}</div>
            </div>
        );
    }
}
export default GradeItem;
