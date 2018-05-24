import React, { Component } from 'react';
import ListStores from '../stores/ListStores'

import GradeItem from './GradeItem';

class GradeList extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            items:[]
        }
    }

    componentDidMount() {
        ListStores.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        ListStores.removeChangeListener(this.onChange);
    }

    onChange() {
        const newItems = ListStores.getAll();
        this.setState({items: newItems});
    }

    render() {
        let itemHtml = this.state.items.map(function (listItem, i) {
            return <GradeItem name={listItem["姓名"]} chinese={listItem["语文"]}
                              math={listItem["数学"]} english={listItem["英语"]} physic={listItem["物理"]}/>;
        });
        return (
            <div className="grade_list">
                <h1>所有</h1>
                <div className="list_item">
                    <div>姓名</div>
                    <div>语文</div>
                    <div>数学</div>
                    <div>英语</div>
                    <div>物理</div>
                    <div>总成绩</div>
                </div>
                {itemHtml}
            </div>
        );
    }
}

export default GradeList;