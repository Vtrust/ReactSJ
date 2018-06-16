import React, { Component } from 'react';
import { connect } from 'react-redux';
import echarts from 'echarts';
// import moment from 'moment';
import './historyScore.css'

const option = {
    title: {
      text: "历史成绩",
      subtext: "加油！"
    },
    itemStyle: {
        color: '#f65e3b'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      width:'90%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: [] 
    },
    series: {
      type: 'bar',
      data: [] 
    }
  };
  

  export class History extends Component {
  
    componentDidMount() {
      if (process.env.NODE_ENV !== 'test') {
          console.log("componentDidMount");
        this.chart = echarts.init(document.getElementById('echarts'));
        const { list } = this.props;
        const dates = [];
        const scores = [];
        console.log("componentDidMount",list);
        for(let i=0;i<list.length;i++){
        // list.reverse().forEach(item => {
          dates.push(list[i].date);
          scores.push(list[i].score);
      // });
        }

        option.yAxis.data = dates;
        option.series.data = scores;
        this.chart.setOption(option);
      }
    }
  
  
    render() {
      return (
        <div className={"main"}>
          <div id="echarts" className={"echarts"} />
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    list: state.game.historyScore
  });
  
  export default connect(mapStateToProps, null)(History);