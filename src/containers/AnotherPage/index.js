import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementTimer } from './actions';
import * as Styled from './styled';
import Button from './Button';

class AnotherPage extends Component{

  constructor(props){
    super(props);
  }

  tick() {
    this.props.onIncrementTimer();
  }

  startTick(){
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stopTick(){
    clearInterval(this.interval);
  }

  componentDidMount(){
    this.startTick();
  }

  componentWillUnmount() {
    this.stopTick();
  }


  render(){
    return(
      <Styled.CenteredText>
        <p>I am a AnotherPage</p>
        <p>Time spent staring at this: {this.props.time}</p>
        <Button color='green' onButtonClicked={() => this.startTick()}>Start</Button>
        <Button color='red' onButtonClicked={() => this.stopTick()}>Stop</Button>
      </Styled.CenteredText>
    )
  }
}


const mapStateToProps = state => {
  return {
    time: state.timer.time
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementTimer: () => dispatch(incrementTimer())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnotherPage);