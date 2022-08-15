

import React from 'react';

function getNum(){
  return Math.floor(Math.random() * 10 + 1)
}
class NumPicker extends Comment{
  render(){
    return <h1>Your num is {getNum()}</h1>

}
}

export default NumPicker;
