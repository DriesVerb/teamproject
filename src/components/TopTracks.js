import React, { useEffect } from "react";
import { fetchTopTracks } from "../actions/GetTracksAction";
import { connect } from "react-redux";

const TopTracks = (props) => {
  useEffect(() => {
    props.fetchTopTracks(props.albumId);
  }, [props.albumId]);

  return (
    <div>
      <hr />

      <h1> Top Tracks </h1>
      {props.topTracks.map((track, index) => {
        return (
          <div key={index}>
            <div>
              <b> Track: </b> {track.strTrack}
            </div>
            <div>
              <b> Artist: </b>
              {track.strArtist}
            </div>
            <br />
          </div>
        );
      })}

      <hr />
    </div>
  );
};

const mapStateToProps = (state) => ({
  topTracks: state.musicReducer.topTracks,
  albumId: state.albumReducer.albumId,
});

export default connect(mapStateToProps, { fetchTopTracks })(TopTracks);
