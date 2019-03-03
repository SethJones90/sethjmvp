import React, { Component } from 'react'

class GetInTouch extends Component {

  render() {
    return (
    <div class="page">
      <h1>GET IN TOUCH</h1>
      <form>
        <input name="name" type="text" className="getInTouchInput"/>
        <input name="email" type="text" className="getInTouchInput"/>
        <input name="message" type="text" className="getInTouchInput"/>  
        <input type="submit" value="submit" className="getInTouchInput"/>
      </form>
    </div>
    )
  }
}

export default GetInTouch;