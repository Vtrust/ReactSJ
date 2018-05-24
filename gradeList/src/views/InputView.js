import React, { Component, PropTypes } from 'react';
import * as Actions from '../Actions.js';
import InputStores from '../stores/InputStores.js';

class inputView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: InputStores.getInputValues()[props.caption],
            value:0
        }
    }
    onInputValue(event) {
        console.log(event.target.value);
        Actions.input(this.props.caption, event.target.value);
    }

    render() {
        const {caption} = this.props;
        return (
            <div className="input_item">
                <label>{caption}</label>
                <input onChange={(e) => this.onInputValue(e)}/>
            </div>
        );
    }
}
export default inputView;
