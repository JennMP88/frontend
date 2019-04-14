import React,{Component} from 'react'
import { Link } from 'react-router-dom'


  class Header extends Component {
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
    console.log(this.state)
    const { list, searchinput } = this.state

    return (<>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to the MovieApp</h1>


          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link" to='/home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allmovies">All Movies </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bygenre">By Genre </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/byid">Movies by Id </Link>
              </li>
              <p>
                <input type='text' value={this.state.searchinput} onChange={this.handleInput} />
                <button onClick={this.handleClick}>Search</button>
              </p>

            </ul>
          </nav>

        </div>
      </div>
    </>)
  }
}

  export default Header
