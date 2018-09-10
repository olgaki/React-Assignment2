import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state = {
        inputLength: 0,
        inputText: ''
    };

    inputChangedHandler = (event) => {
        this.setState({
            inputLength: event.target.value.length,
            inputText: event.target.value
        })
    };

    deleteLetterHandler = (index) =>{
        let inputText = this.state.inputText.split('');
        inputText.splice(index, 1);
        inputText = inputText.join('');
        this.setState({inputText: inputText, inputLength: inputText.length});
    };

    render() {

        let chars=null;
        let letters = null;
        if(this.state.inputText!==null){
            chars =  this.state.inputText.split('');
            letters =  chars.map((letter,index) =>{
                return <Char letter={letter} click={()=> this.deleteLetterHandler(index)} key ={index}/>;
            })
        }
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <div>
              <input type='text' value={this.state.inputText} onChange={(event)=>this.inputChangedHandler(event)}/><Validation inputLength={this.state.inputLength}/>
              <p>The length of entered value is {this.state.inputLength}</p>
          </div>
          {letters}
      </div>
    );
  }
}

export default App;
