import React, { Fragment } from "react";
import { useEffect } from "react/cjs/react.development";
import { fetchBand } from "../actions/GetBandAction";
import { connect } from "react-redux";

const BandName = (props) => {
  useEffect(() => {
    props.fetchBand(props.band);
  }, []);
  return (
    <Fragment>
      <h2>Props we passed: {props.band}</h2>
      <h2>Reducer state: {props.bands.strArtist}</h2>
      <p>important: {props.bands.strBiographyEN}</p>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bands: state.bandReducer.band,
  isVisible: state.bandReducer.isVisible,
});

export default connect(mapStateToProps, { fetchBand })(BandName);
