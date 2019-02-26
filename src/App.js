import React, { Component } from 'react';
import './App.css';
var key2 = (function () {
  let secret =  76;
  return function () {
      return secret;
  };
}());

class App extends Component {
  state = {
    output_text : undefined,
    output_text2 : undefined,
    message : "enter a text-string into the top text-area"
  }
  encryptText = (e) => {
    e.preventDefault();
    let codeStr = "";
    let str = document.getElementById("input_field").value;
    let key = Math.floor(parseFloat(document.getElementById("key").value)) || 7;
      for (let i=0; i<str.length ;i++) {
        let mutated = str.charCodeAt(i) + key + key2(); /* get the ascii code from character and mutate it*/
        mutated = String.fromCharCode(mutated);/* save ascii code as real character */  /* needs bufix for keyrange */
        codeStr +=mutated;
      }
    if ( isNaN(parseFloat(key)) ) {
      codeStr = "please use numbers as key";
    }
    this.setState({
      output_text : codeStr
    });
  }
  decryptText = (e) => {
    let codeStr = "";
    let str = document.getElementById("input_field").value;
    let key = Math.floor(parseFloat(document.getElementById("key").value)) || 7;
    if ( isNaN(parseFloat(key)) && !isFinite(key)) {
      this.setState({
        output_text : "please use numbers as key"
      });
    }
      for (let i=0; i<str.length ;i++) {
        /* get ascii charcode, reverse mutate, then transform to real character */
          let mutated = String.fromCharCode(str.charCodeAt(i) - key2() - key);
          codeStr += mutated;
      }
    this.setState({
      output_text : codeStr
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Text Encryption Application</h1>
        <div className="wrap">
          <p><label id="label">Mutate-Number : </label> <input type="text" id="key" maxLength="3" placeholder="7" /> </p>
          <p> <textarea id="input_field" placeholder="Enter your String here ... "/> </p>
          <p>
          <button onClick={this.encryptText} className="encrypt__btn"> encrypt text </button> 
          <button onClick={this.decryptText} className="decrypt__btn"> decrypt text </button>
          </p>
          <span className="output_descr"> Output : </span>
          <p className="output_field" >{this.state.output_text}</p>
        </div>
      </div>
    );
  }
}
export default App;