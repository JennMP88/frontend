import React from 'react'
import {Link} from 'react-router-dom'
import { HashRouter} from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // searchinput:''
    }
  }


  render() {
    // const {searchinput}=this.state
    return (
      <>
      <HashRouter> 
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Welcome to the MovieApp</h1>

  
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
       </ul>
       </nav>

          </div>
        </div>
        </HashRouter>
      </>
    )
  }
}
export default App;