import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    output_text : undefined,
    message : "enter a text-string into the top text-area"
  }
  encryptText = (e) => {
    e.preventDefault();
    const strTI = e.target.elements.input_field.value;
    const salt = 17;
    let result_as_array = [];
    for (let i=0; i<strTI.length ;i++) {
      console.log(strTI.charCodeAt(i));
      result_as_array[i] = strTI.charCodeAt(i);
    }
    let result_as_str = result_as_array.join('-');
    console.log(result_as_str);
    this.setState({
      output_text : result_as_str
    });
  }
  decryptText = (e) => {
    e.preventDefault();
    // take String from Form split to array. 
    // go over array and diff array[key].value with serialize map.([["A","415"],["415","A"]]) =
    // if array[key].value = map.getValue.key make new Array[key].value = map.getValue.key in this case of 415 = A
    // complete until array[key] = -1 / for loop max/min
    // return new finished array to state and set state to output field.
  }
  render() {
    return (
      <div className="App">
      <h1>Text Encryption Application</h1>
        <form onSubmit={this.encryptText}>
        <p><textarea name="input_field" placeholder="Enter text to be modified here..."/></p>
        <p>
        <button name="encrypt">encrypt text</button>
        </p>
        </form>
      <h2> Output : </h2>
        <textarea name="output" value={this.state.output_text} placeholder="encrypted string output" />
      </div>
    );
  }
}

export default App;
