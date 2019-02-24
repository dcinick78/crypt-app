import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    output_text : undefined,
    message : "enter a text-string into the top text-area"
  }
  encryptText = (e) => {
    e.preventDefault();
    console.log(e.target.elements.input_field.value);
    // var = value; replace each character in string =
    // make array from string;
    // make new array from each array[key] with the corresponding mapped value of the serialize map.([["A","415"],["415","A"]])
    // if array[key] = map.get(A); set new array[map.get(A).value] // = 415 = / A
    // complete until array[key] = -1 / for loop max/min
    // return new finished array to state and set state to output field.

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
      </div>
    );
  }
}

export default App;
