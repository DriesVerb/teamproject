import React, { useEffect } from "react";
import { fetchArtist } from "../actions/ArtistAction";
import { connect } from "react-redux";

const Artists = (props) => {
  useEffect(() => {
    props.fetchArtist();
    console.log(props.artist);
  }, []);

  return (
    <div>
      {props.artist &&
        props.artist.map((track, index) => {
          return (
            <div key={index}>
              <div>{track.name}</div>
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
