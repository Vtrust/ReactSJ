import React, { Component } from 'react';
import './test.css';

let result= 0,
    numShow = 0,
    quit = 0,
    active = 0,
    option = 0,
    temp = 0;

const style = {
    width:'379px',
    float: 'left'
};

class App extends Component {
    constructor(props){
        super(props);
        this.clearScreen = this.clearScreen.bind(this);
        this.del = this.del.bind(this);
        this.divide = this.divide.bind(this);
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
        this.perSent = this.perSent.bind(this);
        this.dot = this.dot.bind(this);
        this.equal = this.equal.bind(this);
        this.clearScreen = this.clearScreen.bind(this);
        this.multiplication = this.multiplication.bind(this);

        this.state = {
            sValue:'0'
        }
    }

    command(num){
        let str=String(this.state.sValue);
        str=(option!==0)?"":str;
        str=(str!=="0")?str:"";
        str=str+String(num);
        this.setState({sValue:str});
        option=0;
        quit=0
    }

    del(){//←
        let str=String(this.state.sValue);
        str=(str!==0)?str:"";
        str=str.substr(0,str.length-1);
        this.setState({sValue:str})
    }
    divide(){//÷
        active=1;
        option=1;
        this.copyData();
    }
    multiplication(){//×
        active=2;
        option=1;
        this.copyData();
    }
    minus(){//-
        console.log("minus");
        active=3;
        option=1;
        this.copyData();
    }
    plus(){//+
        active=4;
        option=1;
        this.copyData();
    }
    perSent(){//%
        active=5;
        option=1;
        this.copyData();
    }
    dot(){//.
        let str=String(this.state.sValue);
        for(let i=0;i<str.length;i++){
            if(str[i]==='.'){
                return false;
            }
        }
        str=(str!=="")?str:"0";
        str=str+".";
        this.setState({sValue:str});
        quit = 1;
    }
    equal(){//=
        numShow=Number(this.state.sValue);
        if(quit===0&&temp!==0){
            switch (active){
                case 1:if(numShow===0){
                    this.setState({sValue:"Wrong!"});
                    setTimeout(this.clearWrong(),1000);
                    return false;
                }else{
                    result=temp/numShow;
                } break;
                case 2:result=temp*numShow; break;
                case 3:result=temp-numShow; break;
                case 4:result=temp+numShow; break;
                case 5:result=temp%numShow; break;
                default: break;
            }
            this.setState({sValue:String(result)});
            this.state.option=0;
        }
        quit=1;
    }
    copyData(){
        temp=Number(this.state.sValue);
    }
    clearScreen(){//C
        result=numShow=quit=active=option=temp=0;
        this.setState({sValue:'0'});
    }
    clearWrong(){
        this.setState({sValue:'0'});
    }
  render() {
    return (
        <div id="calculator">
            <div id="calculator-head"></div>
            <form name="calculator" action="" method="get">
                <div id="calculator-screen">
                    <div className="screen" >{this.state.sValue}</div>
                </div>
                <div id="calculator-button">
                    <ul>
                        <li className="border-top" onClick={this.clearScreen}>C</li>
                        <li className="border-top-left" onClick={this.del}>←</li>
                        <li className="border-top-left" onClick={this.divide}>÷</li>
                        <li className="border-top-left" onClick={this.multiplication}>×</li>
                        <li className="border-top" onClick={this.command.bind(this,7)}>7</li>
                        <li className="border-top-left" onClick={this.command.bind(this,8)}>8</li>
                        <li className="border-top-left" onClick={this.command.bind(this,9)}>9</li>
                        <li className="border-top-left" onClick={this.minus}>-</li>
                        <li className="border-top" onClick={this.command.bind(this,4)}>4</li>
                        <li className="border-top-left" onClick={this.command.bind(this,5)}>5</li>
                        <li className="border-top-left" onClick={this.command.bind(this,6)}>6</li>
                        <li className="border-top-left" onClick={this.plus}>+</li>
                    </ul>
                    <ul style={style}>
                        <li className="border-top" onClick={this.command.bind(this,1)}>1</li>
                        <li className="border-top-left" onClick={this.command.bind(this,2)}>2</li>
                        <li className="border-top-left" onClick={this.command.bind(this,3)}>3</li>
                        <li className="border-top" onClick={this.perSent}>%</li>
                        <li className="border-top-left" onClick={this.command.bind(this,0)}>0</li>
                        <li className="border-top-left" onClick={this.dot}>.</li>
                    </ul>
                    <ul>
                        <li className="sum" onClick={this.equal}>=</li>
                    </ul>
                </div>
            </form>
        </div>
    );
  }
}

export default App;
