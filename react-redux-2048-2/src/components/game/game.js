import React, { Component } from 'react';
import GameBoard from '../gameBoard/gameBoard';
import { connect } from 'react-redux';
import {newGame,moveTiles,newDocumentWidth} from '../../actions/actions';

let startx = 0;
let starty = 0;
let endx = 0;
let endy = 0;



class Game extends Component {

    componentDidMount () {
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.touchstart = this.touchstart.bind(this);
        this.touchend = this.touchend.bind(this);
        this.getSize = this.getSize.bind(this);
        window.addEventListener('keydown', this.handleKeyPress);
        window.addEventListener('touchstart',this.touchstart);
        window.addEventListener('touchend',this.touchend);
        window.addEventListener('resize',this.getSize);
    }

    getSize(){
        this.props.DocumentWidth(window.screen.availWidth);
    }

    //键盘监听
    handleKeyPress (ev) {
        let { key } = ev;
        let match = key.toLowerCase().match(/arrow(up|right|down|left)/);
        if (match) {
            console.log("handleKeyPress",match[1]);
            this.props.MoveTiles(match[1]);
            ev.preventDefault();
        }
    }

    //触摸监听
    touchstart (ev) {
        ev.preventDefault();
        startx = ev.touches[0].pageX;
        starty = ev.touches[0].pageY;
        console.log(startx,starty);
    }

    touchend (ev) {
        console.log("touchend");
        endx = ev.changedTouches[0].pageX;
        endy = ev.changedTouches[0].pageY;
        console.log(endx,endy);
        //控制逻辑
       let delx=endx-startx;
       let dely=endy-starty;
      
       if(Math.abs(delx)<0.2*window.screen.availWidth&&Math.abs(dely)<0.2*window.screen.availWidth){
        console.log("return",window.screen.availWidth,delx,dely);
           return;
       }

        if(Math.abs(delx)>=Math.abs(dely)){
            //x            
            if(delx>0){
                //move right
                this.props.MoveTiles('right');
            }else{
                //move left
                this.props.MoveTiles('left');
            }
        }else{
            //y
            if(dely>0){
                //move down
                this.props.MoveTiles('down');
            }else{
                //move up
                this.props.MoveTiles('up');
            }

        }
    }

    render () {
        return  <GameBoard />
    }
}
const mapStateToProps = state => {
  return {
    DocumentWidth:state.game.documentWidth
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        NewGame: () => dispatch(newGame()),
        MoveTiles: direction => dispatch(moveTiles(direction)),
        DocumentWidth: documentWidth => dispatch(newDocumentWidth(documentWidth))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);