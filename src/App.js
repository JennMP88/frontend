import React,{Component} from 'react'
import { HashRouter,Route} from 'react-router-dom'; 
import Header from './components/header'
import Movies from './containers/allmovies'
import Genre from './containers/bygenre'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

render(){
    return (
      <>

      <HashRouter> 
      <Header/>
      <Route path='/allmovies'component={Movies} />
      <Route path='/bygenre'component={Genre} />
      </HashRouter>
      </>
    )
  }
}
export default App;