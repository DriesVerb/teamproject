import React, { useEffect } from "react";

import {
  startSearch,
  getBandName,
  fetchBand,
} from "../actions/SearchByBandAction";

import { connect } from "react-redux";

import BandName from "../components/BandName";

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

      {props.search && props.search ? (
        <BandName bandInfo={props.bandName} />
      ) : null}
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
