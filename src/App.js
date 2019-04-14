import React,{Component} from 'react'
import { HashRouter,Route} from 'react-router-dom'; 
import Header from './components/header'
import Movies from './containers/allmovies'

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
      </HashRouter>
      </>
    )
  }
}
export default App;