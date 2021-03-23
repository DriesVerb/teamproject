import React, { useEffect } from "react";
import {
  fetchMusicCharts,
  changeCountry,
  changeVisible,
  changeBandName,
} from "../actions/GetMusicAction";
import { connect } from "react-redux";

import BandName from "./BandName";

const SearchCountry = (props) => {
  useEffect(() => {
    props.fetchMusicCharts(props.country);
    console.log(props.charts);
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <h1> Top Artists </h1>
=======
      <h3>Search a new country</h3>
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

      {props.isVisible ? <BandName band={props.bandName} /> : null}

      <h1>These are the top artist from: {props.country}</h1>
>>>>>>> origin/master
      {props.charts &&
        props.charts.map((band, index) => {
          return (
            <div key={index}>
<<<<<<< HEAD
              <div>{track.idTrack}</div>
=======
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.changeBandName(band.name);
                  props.changeVisible();
                }}
              >
                {band.name}
              </div>
>>>>>>> origin/master
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  charts: state.musicReducer.music,
  country: state.musicReducer.country,
  isVisible: state.musicReducer.isVisible,
  bandName: state.musicReducer.bandName,
});

export default connect(mapStateToProps, {
  fetchMusicCharts,
  changeCountry,
  changeVisible,
  changeBandName,
})(SearchCountry);
