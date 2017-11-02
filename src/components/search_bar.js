import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {term : 'input keyword here'};
  }

  render() {
    return (
     //<div><input onChange={ event => console.log(event.target.value)} /></div>
     <div>
       <input value = {this.state.term} onChange={ event => this.setState( {term : event.target.value} )} />  
     </div>
    );
  }
}
