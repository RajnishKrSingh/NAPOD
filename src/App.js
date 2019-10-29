import React, { Component } from 'react';
import DateInput from "./components/DateInput.js";
import Photo from "./components/Photo.js";
import './App.css';



class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({date: dateFromInput});
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=KQzt5yp38oofDZ1SbAoUTpdWvi5kZUL0kFm72hvs`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=KQzt5yp38oofDZ1SbAoUTpdWvi5kZUL0kFm72hvs`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <h1 className="tc shadow-5 f1">NASA's Astronomy Picture of the Day!</h1>
        <DateInput changeDate = {this.changeDate} date = {this.state.date} />
        <Photo photo = {this.state.photo}/>
      </div> 
    );
  }
}

export default App;
