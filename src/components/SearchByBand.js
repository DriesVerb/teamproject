import React, { useEffect } from "react";

import {
  startSearch,
  getBandName,
  fetchBand,
} from "../actions/SearchByBandAction";

import { connect } from "react-redux";

import BandName from "../components/BandName";

const SearchByBand = (props) => {
  useEffect(() => {
    props.fetchBand(props.bandName);
  }, []);

  return (
    <div>
      <h1>Search by Band</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.fetchBand(props.bandName);
          props.startSearch();
          console.log(props.startSearch);
        }}
      >
        <input
          onChange={(event) => {
            event.preventDefault();
            props.getBandName(event.target.value);
          }}
        />

        <button type="submit">Search</button>
      </form>

      {props.search ? <BandName band={props.bandName} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  band: state.searchByBandReducer.bandInfo,
  bandName: state.searchByBandReducer.bandName,
  search: state.searchByBandReducer.startSearch,
});

export default connect(mapStateToProps, {
  startSearch,
  getBandName,
  fetchBand,
})(SearchByBand);