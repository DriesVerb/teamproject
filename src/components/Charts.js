import React, { useEffect } from "react";
import { fetchMusicCharts } from "../actions/GetMusicAction";
import { connect } from "react-redux";

const Charts = (props) => {
  useEffect(() => {
    props.fetchMusicCharts();
    console.log(props.charts);
  }, []);

  return (
    <div>
      <h1> Top Artists </h1>
      {props.charts &&
        props.charts.map((track, index) => {
          return (
            <div key={index}>
              <div>{track.idTrack}</div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  charts: state.musicReducer.music,
});

export default connect(mapStateToProps, { fetchMusicCharts })(Charts);
