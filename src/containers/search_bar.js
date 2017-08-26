import React, { Component } from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term : ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    this.setState({
      term : event.target.value
    });
  }
  render(){
    return(
      <div className="row search-bar">
        <div className="col-md-offset-2 col-md-6">
          <input placeholder="Enter city name"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}/>
        </div>
        <div className="col-md-2">
          <button className="btn btn-block">Search</button>
        </div>
      </div>
    )
  }
}