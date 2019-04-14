// import React, { Component } from 'react';
// import { HashRouter, Route } from 'react-router-dom';
// import axios from 'axios'

// //----Cocmponents/Containers
// import Header from './components/header';
// import Error404 from './components/error404';
// import Userprofile from './containers/userprofile';
// import Search from './containers/search';



// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       searchinput=''
//     }
//   }
// }


// componentDidMount() {

//   axios.get(`http://localhost:3001/users/${uid}`)
//     .then(({ data }) => {
//       const id = data[0].id

//       const fullUserInfo = Object.assign({}, user, { id })

//       this.setState({ user: fullUserInfo });
//     })
//     .catch(console.error)

// }




// render() {
//   const application = this.state.user
//   return (
//     <>
//       (<HashRouter>

//         <Route path='/' component={Home} />
//         <div className='container mt-5'>

//           {/* <Route path='/' exact component={ Home } /> */}
//           <Route path='/movies' exact component={Movies} />
//           <Route path='/movies/byGenre' exact component={Genre} />
//           {/* <Route path='/movies/:id' render={(props) => <Following {...props} user={this.state.user} />} /> */}
//         </div>

//       </HashRouter>)
//         </>)

// }


// export default App;