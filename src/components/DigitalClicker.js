// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    //event.preventDefault();
    // debugger;

    this.setState({
      timesClicked: ++this.state.timesClicked
    }, () => console.log(this.state.timesClicked))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
