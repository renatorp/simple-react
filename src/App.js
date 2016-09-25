import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListaPalavras from './ListaPalavras';
import InputAdd from './InputAdd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      palavras: ["teste 1", "teste 2"]
    };
    
    this.addPalavra = this.addPalavra.bind(this);
    this.removePalavra = this.removePalavra.bind(this);
  }

  addPalavra(value) {
      this.state.palavras.push(value);
      this.setState(
        { palavras: this.state.palavras }
      );
  }
  removePalavra(value) {
      this.state.palavras.splice(value, 1);
      this.setState(
        { palavras: this.state.palavras }
      );
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="container">
          <br />
            <InputAdd items={this.state.palavras} onclick={this.addPalavra}/>
            <ListaPalavras items={this.state.palavras} onRemovePalavra={this.removePalavra}/>
          </div>
      </div>
    );
  }
}

export default App;
