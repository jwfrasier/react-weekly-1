import React, {Component} from "react"
import PlayListItem from "./PlayListItem.js"
class PlayList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  render(){
    return(
      <div>
      <h2>This is the PlayList spot</h2>
      <PlayListItem songs = {this.state.songs}/>
      </div>
    )
  }
}
export default PlayList
