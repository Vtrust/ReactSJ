import React, { Component } from 'react';
import InputView from './InputView';
import GradeList from './GradeList';
import InputStores from '../stores/InputStores';
import * as Actions from '../Actions.js';


class App extends Component {
     addGradeItem(){
        let newItem = InputStores.getInputValues();
        Actions.add(newItem);
    }
    render() {
        return (
            <div className="App">
                <h1>添加</h1>
                <div className="Add">
                    <InputView caption="姓名"/>
                    <InputView caption="语文"/>
                    <InputView caption="数学"/>
                    <InputView caption="英语"/>
                    <InputView caption="物理"/>
                    <button className="add_button" onClick={this.addGradeItem}>添加</button>
                </div>
                <GradeList/>
            </div>
        );
    }
}

export default App;
