import React, { useEffect } from "react";
import { fetchArtist } from "../actions/ArtistAction";
import { connect } from "react-redux";

const Artists = (props) => {
  useEffect(() => {
    props.fetchArtist();
    // console.log(props.artist);
  }, []);

  return (
    <div className="artistDiv">
      <div className="headerDiv">
        <h2 className="headingArtist">Top Artists </h2>
      </div>

      {props.artist &&
        props.artist.map((artist, index) => {
          return (
            <div key={index} className="artistName">
              {artist.name}
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  artist: state.artistReducer.artists,
});

export default connect(mapStateToProps, { fetchArtist })(Artists);
