import React, { Component } from 'react'
import {getAllMovies} from '../service/axios'

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
    //trigger axios
  }

  componentDidMount(){
    getAllMovies()
    .then((response)=>{
      console.log(response)
      this.setState({list:response})
    })  
  }


  //-------------
 myCard=(props)=>{ 
 console.log(props)
 return (<div className="card" style={{ width: '18rem' }}>
  <img src={props.everything.img_url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.everything.title}</h5>
    <p className="card-text">Ratings</p>
    {/* url and avg title */}
  </div>
 </div>)}
  render() {

    const { list, searchinput } = this.state

    return (<>
      <p>
        <input type='text' value={this.state.searchinput} placeholder='search by title'  onChange={this.handleInput} />
        <button onClick={this.handleClick}>Search</button>
      </p>

      {
        this.state.list.map((e,i)=>{
        return   <this.myCard everything={e} key={i}/> 
        })
      
      }
     
    </>
    )
  }
}
export default Movies