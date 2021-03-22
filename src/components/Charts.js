import React, { useEffect } from "react";
import { fetchMusicCharts, changeCountry } from "../actions/GetMusicAction";
import { connect } from "react-redux";

const Charts = (props) => {
  useEffect(() => {
    props.fetchMusicCharts(props.country);
    console.log(props.charts);
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.fetchMusicCharts(props.country);
        }}
      >
        <input
          onChange={(e) => {
            e.preventDefault();
            props.changeCountry(e.target.value);
          }}
        />
        <button>Search</button>
      </form>

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
  country: state.musicReducer.country,
});

export default connect(mapStateToProps, { fetchMusicCharts, changeCountry })(
  Charts
);
