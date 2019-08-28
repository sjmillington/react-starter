import React from 'react';
import * as Styled from './styled';


const Button = (props) => {

  switch(props.color){
  case 'green': 
    return (
      <Styled.GreenButton onClick={props.onButtonClicked}>
        {props.children}
      </Styled.GreenButton>
    )
  case 'red': 
    return (
      <Styled.RedButton onClick={props.onButtonClicked}>
        {props.children}
      </Styled.RedButton>
    )
  default: 
    return (
      <button onClick={props.onButtonClicked}>
        {props.children}
      </button>
    )
  }


  
}

export default Button;
