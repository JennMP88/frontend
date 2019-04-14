import React, { Component } from 'react'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      searchinput: ''
    }
  }

  handleInput = (e) => {
    this.setState({ searchinput: e.target.value })
  }

  handleClick = (e) => {
    // console.log('clicked')
    const { list, searchinput } = this.state;
    list.push(searchinput)
    this.setState({ list, searchinput: '' })
  }

  render() {

    const { list, searchinput } = this.state

    return (<>
      <p>
        <input type='text' value={this.state.searchinput}  onChange={this.handleInput} />
        <button onClick={this.handleClick}>Search</button>
      </p>
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 class="card-title">Movie Title</h5>
          <p className="card-text">Something something card title</p>
          {/* url and avg title */}
        </div>
      </div>
    </>
    )
  }
}
export default Movies