import React, { useEffect } from "react";
import { fetchTopTracks } from "../actions/GetMusicAction";
import { connect } from "react-redux";

const TopTracks = (props) => {
  useEffect(() => {
    props.fetchTopTracks();
  }, []);

  return (
    <div>

      <h1> Top Tracks </h1>


      {props.topTracks &&
        props.topTracks.map((track, index) => {
          return (
            <div key={index}>
              <div>
                {track.name} - <a href={track.url} target = '_blank' rel='noreferrer' > Play </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  topTracks: state.musicReducer.topTracks,
});

export default connect(mapStateToProps, {fetchTopTracks})(TopTracks);
