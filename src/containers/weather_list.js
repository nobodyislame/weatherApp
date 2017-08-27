import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
  render(){
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather })=>{ //accesing state.weather
  return { weather } //{ weather : weather }
}

export default connect(mapStateToProps)(WeatherList);
