import React, { Component } from "react";
import History from '../components/historyScore/historyScore'

export default class Subpage extends Component {
    render() {
        return (
            <div className="Score">
                <History/>
            </div>
        )
    }
}