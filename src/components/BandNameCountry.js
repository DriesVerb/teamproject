import React, { Fragment, useEffect } from "react";
import { fetchBand, getBandId } from "../actions/GetBandAction";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const BandNameCountry = (props) => {
  useEffect(() => {
    props.fetchBand(props.bandNameCountry);
    props.getBandId(props.bands.idArtist);
  }, [props.bandNameCountry, props.bands.idArtist]);

  return (
    <Fragment>
      <div
        style={{
          width: "100vw",
          height: "300px",
          // marginBottom: "5px",
          boxShadow: "2px 5px 5px grey",
        }}
      >
        <img
          src={props.bands.strArtistFanart}
          alt="BandPhoto"
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            opacity: 0.8,
          }}
        />
      </div>
      <div
        style={{
          height: "90px",
          border: "1px solid black",
          textAlign: "start",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
          // background: "#33691e ",
        }}
      >
        <h1
          style={{
            marginLeft: "5px",

            letterSpacing: "2px",
            textShadow: "2px 2px 2px grey",
          }}
        >
          {" "}
          {props.bands.strArtist}
        </h1>
        <p
          style={{
            position: "absolute",
            marginTop: "5rem",
            marginLeft: "7px",
            fontSize: "1.2rem",
            letterSpacing: "1.5px",
            fontWeight: "500",
            textShadow: "2px 2px 3px grey",
          }}
        >
          {props.bands.strStyle} / "{props.bands.intFormedYear}"
        </p>

        <button
          style={{
            width: "120px",
            height: "30px",
            letterSpacing: "2px",
            textAlign: "center",
            borderRadius: "50px",
            marginRight: "5px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Go to Album
        </button>
        <NavLink to="/album">Album</NavLink>
      </div>
      <div
        style={{
          height: "220px",
          border: "1px solid black",
          overflow: "scroll",
          marginTop: "5px",
        }}
      >
        <p
          style={{
            letterSpacing: "1.5px",
            lineHeight: "30px",
            fontSize: "1.1rem",
            padding: "5px",
          }}
        >
          {props.bands.strBiographyEN}
        </p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bandNameCountry: state.countryReducer.bandName,
  bands: state.bandReducer.band,
  bandId: state.bandReducer.bandId,
  isVisible: state.bandReducer.isVisible,
});

export default connect(mapStateToProps, { fetchBand, getBandId })(
  BandNameCountry
);
