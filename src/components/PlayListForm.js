import React, {Component} from "react"

class PlayListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handleSongArtistChange = event => {
  this.setState({
    songArtist: event.target.value
  })
}

handleSongTitleChange = event => {
  this.setState({
    songTitle: event.target.value
  })
}

handleSongNotesChange = event => {
  this.setState({
    songNotes: event.target.value
  })
}

  addToList = (e) => {
      e.preventDefault();
      this.setState({
           userName: e.target.value,
           songTitle: e.target.value,
           songArtist: e.target.value,
           songNotes: e.target.value
         });

      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form onSubmit={this.addToList}>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">User Name:</label>
      <input type="text" className="form-control" id="formGroupExampleInput" value={this.state.userName}  onChange = {handleUserNameChange}/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Artist/Band:</label>
      <input type="text" className="form-control" id="formGroupExampleInput2" value={this.state.songArtist}  onChange = {handleSongArtistChange}/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Song Title</label>
      <input type="text" className="form-control" id="formGroupExampleInput" value={this.state.songTitle}  onChange = {handleSongTitleChange}/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Notes about Song:</label>
      <input type="text" className="form-control" id="formGroupExampleInput" value={this.state.songNotes}  onChange = {handleSongNotesChange}/>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
    )
  }
}

export default PlayListForm
