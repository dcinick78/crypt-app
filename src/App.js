import React, { Component } from 'react';
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
        if ( String.fromCharCode(strTI[i]) != NaN ) {
          codeDecrypted += String.fromCharCode(strTI[i]);
        }
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
        <div className="left">
            <h3>ENCRYPT </h3>
            <h2>Input</h2>
          <form onSubmit={this.encryptText}>
            <p>
              <textarea name="input_field" placeholder="Enter text to be modified here..."/>
            </p>
            <p>
              <button name="encrypt">encrypt text</button>
            </p>
          </form>
            <h2> Output : </h2>
            <textarea name="output" value={this.state.output_text}  placeholder="encrypted string output" />
          </div>

          <div className="right">
            <h3>DECRYPT </h3>
            <h2>Input</h2>
            <form onSubmit={this.decryptText}>
              <p><textarea name="input_field2" placeholder="Enter text to be modified here..."/></p>
              <p>
              <button name="decrypt">decrypt text</button>
              </p>
            </form>
            <h2> Output : </h2>
            <textarea name="output" value={this.state.output_text2}  placeholder="decrypted string output" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
