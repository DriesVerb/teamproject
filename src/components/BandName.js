import React, { Fragment, useEffect } from "react";
import { fetchBand, getBandId } from "../actions/GetBandAction";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const BandName = (props) => {
  useEffect(() => {
    props.fetchBand(props.bandInfo);
    props.getBandId(props.bands.idArtist);
  }, [props.bandName]);

  return (
    <Fragment>
      <div className="photoDiv mx-auto">
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
          textAlign: "start",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <h2 className="heading "> {props.bands.strArtist}</h2>
        <p
          style={{
            position: "absolute",
            marginTop: "4.5rem",
            marginRight: "aut0",
            fontSize: "1.2rem",
            letterSpacing: "1.5px",
            fontWeight: "500",
            textShadow: "2px 2px 3px grey",
            color: "white",
          }}
        >
          {props.bands.strStyle} / "{props.bands.intFormedYear}"
        </p>

        {/* <button
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
        </button> */}
        <NavLink className="navLink" to="/album">
          Album
        </NavLink>
      </div>
      <div
        style={{
          height: "220px",
          border: "1px solid black",
          overflowX: "hidden",
          overflowY: "scroll",
          marginTop: "1.2rem",
        }}
      >
        <p
          style={{
            color: "white",
            letterSpacing: "1.5px",
            lineHeight: "50px",
            fontSize: "1.5rem",
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
  bands: state.bandReducer.band,
  bandId: state.bandReducer.bandId,
  isVisible: state.bandReducer.isVisible,
});

export default connect(mapStateToProps, { fetchBand, getBandId })(BandName);
