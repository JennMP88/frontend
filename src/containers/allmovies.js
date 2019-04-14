import React, { Component } from 'react'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {

    return (<>

       <div className="card" style={{width: '18rem'}}> 
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 class="card-title">Movie Title</h5>
          <p className="card-text">Something something card title</p>
        </div>
      </div>
      {/* <h1>hi</h1> */}
    </>
    )
  }
}
export default Movies