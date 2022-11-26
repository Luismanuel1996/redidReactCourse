import React, { Component } from 'react'
import FilmsList from './Components/filsList';

export default class App extends React.Component {
constructor(props){
  super(props)

this.state = {
  list: ["ready", "set", "go"] ,
  text: ""
};

this.handleInput = this.handleInput.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}

handleInput(event){
  this.setState({text: event.target.value, })

}

onSubmit(event){
  event.preventDefault();
  this.setState({list: [...this.state.list, this.state.text]
  })
}

render(){
  return (
    <div>
    <h1>Hello World!</h1>
    <form onSubmit={this.onSubmit} >
    <input onChange={this.handleInput} 
    type="text" 
    value={this.state.text}/>
    <button type='submit' >Add</button>
    </form>
    <ul>
      {this.state.list.map((item, index)=>{
        return <li key={item + index} >{item}</li>
      })}
    </ul>
    <FilmsList/>
    </div>
  )
}
}
