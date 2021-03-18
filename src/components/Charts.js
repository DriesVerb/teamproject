import React, { Component, useEffect } from "react";
import { fetchMusicCharts } from "../actions/GetMusicAction";
import { connect } from "react-redux";

// const Charts = (props) => {
//   useEffect(() => {
//     props.fetchMusicCharts();
//     console.log(props.data);
//   }, []);

class Charts extends Component {
  componentDidMount() {
    this.props.fetchMusicCharts();
    console.log(this.props.charts);
  }
  render() {
    const chartItems = this.props.charts.tracks.track.map((track, index) => {
      return (
        <div>
          <div>
            <h1>Hello</h1>
            {track.name}
          </div>
        </div>
      );
    });

    return <div>{chartItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  charts: state.musicReducer.music1,
});

export default connect(mapStateToProps, { fetchMusicCharts })(Charts);
