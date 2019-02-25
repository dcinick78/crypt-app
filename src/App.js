import React, { Component } from 'react';
import EncryptLayer from './components/encrypt';
import DecryptLayer from './components/decrypt';
import './App.css';

class App extends Component {
  state = {
    output_text : undefined,
    output_text2 : undefined,
    message : "enter a text-string into the top text-area"
  }
  encryptText = (e) => {
    e.preventDefault();
    const strTI = e.target.elements.input_field.value;
    let result_as_array = [];
      for (let i=0; i<strTI.length ;i++) {
        result_as_array[i] = strTI.charCodeAt(i);
      }
    let codeStr = result_as_array.join("-");
      this.setState({
        output_text : codeStr
      });
  }
  decryptText = (e) => {
    e.preventDefault();
    const strTI = e.target.elements.input_field2.value.split("-");
    let codeDecrypted = "";
      for (let i=0; i<strTI.length ;i++) {
          codeDecrypted += String.fromCharCode(strTI[i]);        
      }
    this.setState({
      output_text2 : codeDecrypted
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Text Encryption Application</h1>
        <div className="wrap">
          <EncryptLayer encryptText={this.encryptText} output={this.state.output_text} />
          <DecryptLayer decryptText={this.decryptText} output={this.state.output_text2} /> 
        </div>
      </div>
    );
  }
}

export default App;
