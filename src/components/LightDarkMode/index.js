// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {ligthMode: false}

  onClickbutton = () => {
    this.setState(prevState => ({
      ligthMode: !prevState.ligthMode,
    }))
  }

  render() {
    const {ligthMode} = this.state
    const modelClassName = ligthMode ? 'dark-card' : 'light-card'
    const modelHeading = ligthMode ? 'dark-head' : 'light-head'
    const buttonText = ligthMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="main-container">
        <div className={`${modelClassName}`}>
          <h1 className={`${modelHeading}`}>Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onClickbutton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
