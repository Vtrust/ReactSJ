import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addGrade} from '../action';

class AddGrade extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            name: '',
            chinese: '',
            math: '',
            english: '',
            physic: ''
        };
    }

    onSubmit(ev) {
        ev.preventDefault();

        const grade = this.state;
        if (!grade.name.trim()||!grade.chinese.trim()||
            !grade.math.trim()||!grade.english.trim()||
            !grade.physic.trim()) {
            return;
        }

        this.props.onAdd(grade);
        // this.setState({
        //     name: '',
        //     chinese: '',
        //     math: '',
        //     english: '',
        //     physic: ''
        // });
    }

    onInputChange(event) {
        let name = event.target.name;
        switch (name){
            case 'name':
                this.setState({
                    name: event.target.value
                });
                break;
            case 'chinese':
                this.setState({
                    chinese: event.target.value
                });
                break;
            case 'math':
                this.setState({
                    math: event.target.value
                });
                break;
            case 'english':
                this.setState({
                    english: event.target.value
                });
                break;
            case 'physic':
                this.setState({
                    physic: event.target.value
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="add-grade">
                <form onSubmit={this.onSubmit}>
                    <input className="new-grade" name={"name"} onChange={this.onInputChange} value={this.state.name} />
                    <input className="new-grade" name={"chinese"} onChange={this.onInputChange} value={this.state.chinese} />
                    <input className="new-grade" name={"math"} onChange={this.onInputChange} value={this.state.math} />
                    <input className="new-grade" name={"english"} onChange={this.onInputChange} value={this.state.english} />
                    <input className="new-grade" name={"physic"} onChange={this.onInputChange} value={this.state.physic} />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

AddGrade.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (grade) => {
            dispatch(addGrade(grade));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddGrade);