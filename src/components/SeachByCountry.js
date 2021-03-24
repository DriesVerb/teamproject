import React, { useEffect } from "react";
import {
  startSearch,
  fetchMusicCharts,
  changeCountry,
  changeVisible,
  changeBandName,
} from "../actions/GetMusicAction";
import { connect } from "react-redux";

import BandName from "./BandName";

const SearchCountry = (props) => {
  const getInput = (event) => {
    const country = event.target.value;
    props.changeCountry(country);
    console.log(props.search);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.fetchMusicCharts(props.country);
    props.startSearch();
    console.log(props);
  };

  return (
    <div>
      <h3>Search a new country</h3>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={getInput} />
        <button type="submit">Search</button>
      </form>

      {props.isVisible ? <BandName band={props.bandName} /> : null}

      {props.search ? (
        <div>
          {props.charts &&
            props.charts.map((band, index) => {
              return (
                <div key={index} className="artistDiv">
                  <div
                    className="artistList"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
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
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.countryReducer.startSearch,
  charts: state.countryReducer.music,
  country: state.countryReducer.country,
  isVisible: state.countryReducer.isVisible,
  bandName: state.countryReducer.bandName,
});

export default connect(mapStateToProps, {
  startSearch,
  fetchMusicCharts,
  changeCountry,
  changeVisible,
  changeBandName,
})(SearchCountry);
