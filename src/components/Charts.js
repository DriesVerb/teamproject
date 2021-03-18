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
      {props.charts &&
        props.charts.map((track, index) => {
          return (
            <div key={index}>
              <div>{track.name}</div>
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
