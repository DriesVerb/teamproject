import React, { useEffect } from 'react';
import {
  fetchMusicCharts,
  changeCountry,
  changeVisible,
  changeBandName,
} from '../actions/GetMusicAction';
import { connect } from 'react-redux';

import BandName from './BandName';

const SearchCountry = (props) => {
  useEffect(() => {
    props.fetchMusicCharts(props.country);
  }, []);

  return (
    <div>
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

      <h1 style={{ textTransform: "capitalize" }}>
        {" "}
        Top artists of {props.country}
      </h1>
      {props.charts &&
        props.charts.map((band, index) => {
          return (
            <div key={index} className="artistDiv">
              <div
<<<<<<< HEAD
                style={{ cursor: 'pointer' }}
=======
                className="artistList"
                style={{ cursor: "pointer" }}
>>>>>>> 0d2242b8e9f6f4a31412bf9d3004c9fa79a15565
                onClick={() => {
                  props.changeBandName(band.name);
                  props.changeVisible();
                }}
              >
                {band.name}
              </div>
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
