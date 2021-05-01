import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleKeyEntry = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  remainingChars() {
    let chars = this.state.message.length
    return (this.props.maxChars - chars)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleKeyEntry}
        />
        <br/>
        RemainingCharacters:
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
