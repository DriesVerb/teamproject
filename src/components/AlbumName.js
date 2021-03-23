import React, { Fragment, useEffect } from 'react';
import { fetchAlbum } from '../actions/AlbumAction';
import { connect } from 'react-redux';

const AlbumName = (props) => {
  useEffect(() => {
    props.fetchAlbum();
  }, []);
  return (
    <Fragment>
      {props.album.map((e) => {
        return <div>{e.strArtist}</div>;
      })}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  album: state.albumReducer.album,
  isVisible: state.albumReducer.isVisible,
});

export default connect(mapStateToProps, { fetchAlbum })(AlbumName);
