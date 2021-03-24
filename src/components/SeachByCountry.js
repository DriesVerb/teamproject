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
  useEffect(() => {
    props.fetchMusicCharts(props.country);
  }, []);

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
    <div className="country container-fluid col-sm-12 my-3 mb-5 py-4 ">
      <div className="form my-sm-3 text-center">
        <form className="formControl text-center " onSubmit={onSubmit}>
          <input
            className="search mr-3 "
            type="text"
            placeholder="Country Name ..."
            onChange={getInput}
          />

          <button className=" btn-sm btn-secondary" type="submit">
            Search
          </button>
        </form>
      </div>

      {props.isVisible ? <BandName bandInfo={props.bandName} /> : null}

      <h2 className="heading text-center text-white my-5">
        Top Artists of {props.country}
      </h2>
      <div className="artistDiv container-fluid ml-3 col-12 d-flex row justify-content-between">
        {props.charts &&
          props.charts.map((band, index) => {
            return (
              <div
                key={index}
                className=" container-fluid col-sm-6 col-md-2 my-sm-2 py-sm-2"
              >
                <div
                  className="artistList  d-flex justify-content-center align-items-center"
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
