import React, { useEffect } from 'react';
import { fetchTopTracks } from '../actions/GetMusicAction';
import { connect } from 'react-redux';

const TopTracks = (props) => {
  useEffect(() => {
    props.fetchTopTracks();
  }, []);

  return (
    <div style={{textAlign: 'center'}}>
      <hr />

      <h1> Top Tracks </h1>
      {props.topTracks &&
        props.topTracks.map((track, index) => {
          return (
            <div key={index}>
              <div>
                <b> Song : </b> {track.strTrack}
              </div>
              <div>
                <b> By: </b>
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
});

export default connect(mapStateToProps, { fetchTopTracks })(TopTracks);
