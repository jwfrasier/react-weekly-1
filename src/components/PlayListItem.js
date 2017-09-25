import React, {Component} from "react"
class PlayListItem extends Component{
  constructor(props){
    super(props)

  }
  render(){
    const item = this.props.songs.map(song => {
      console.log("this is the item", this.props.songs)
    return (
    <div key={song._id}>
        <h2>This is the PlayListItem</h2>
      <div>
        <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">User: {song.userName}</li>
          <li className="list-group-item">Artist: {song.songArtist}</li>
          <li className="list-group-item"> Title: {song.songTitle}</li>
          <li className="list-group-item"> Notes: {song.songNotes}</li>
        </ul>
        </div>
      </div>
    </div>
    )
  })
  return (
<div>
{item}
</div>
  )
}
}
export default PlayListItem
