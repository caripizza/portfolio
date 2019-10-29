import React from 'react';

export default class Fields extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    // this.focusTextInput = () => {
    //   if(this.textInput) this.textInput.focus();
    // or? document.getElementById('inputBox').focus();
    // };

    this.clearInput = () => {
      this.textInput.value = '';
    };
  }

  // componentDidMount() {
  //   this.focusTextInput();
  // }

  render() {
    return (
      <main>
        <div>
          <input
            type="text"
            ref={this.setTextInputRef}
            autoFocus
            id='inputBox'
          />
          {/* <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          /> */}
          <input
            type="button"
            value="Clear the text input"
            onClick={this.clearInput}
          />
        </div>
      </main>
    );
  }
}
