import {Component} from 'react'

import './index.css'

class Greetings extends Component {
  state = {
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="greetings-container">
        <div className="responsive-container">
          <input
            type="text"
            className="input-filed"
            value={userInput} {/*This line used for the controlled input */}
            onChange={this.onChangeUserInput} {/*This line used for the uncontrolled input */}
          />
          <p className="paragraph">Hello, {userInput}</p>
        </div>
      </div>
    )
  }
}

export default Greetings
