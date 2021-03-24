import React, { useEffect } from "react";

import {
  startSearch,
  getBandName,
  fetchBand,
} from "../actions/SearchByBandAction";

import { connect } from "react-redux";

import BandNameBand from "./BandNameBand";

const SearchByBand = (props) => {
  return (
    <div>
      <h1>Search by Band</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.fetchBand(props.bandName);
          props.startSearch();
        }}
      >
        <input
          onChange={(event) => {
            props.getBandName(event.target.value);
          }}
        />

        <button type="submit">Search</button>
      </form>

      {props.error ? (
        <div>
          Your searched for "{props.error}". Unfortunately this is not a band!
        </div>
      ) : null}

      {props.search ? <BandNameBand /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.searchByBandReducer.error,
  band: state.searchByBandReducer.bandInfo,
  bandName: state.searchByBandReducer.bandName,
  search: state.searchByBandReducer.startSearch,
});

export default connect(mapStateToProps, {
  startSearch,
  getBandName,
  fetchBand,
})(SearchByBand);
