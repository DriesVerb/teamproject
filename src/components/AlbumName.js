import React, { Fragment, useEffect } from "react";
import { fetchAlbum, getAlbumId } from "../actions/AlbumAction";
import { connect } from "react-redux";

const AlbumName = (props) => {
  useEffect(() => {
    props.fetchAlbum(props.bandId);
  }, []);

  return (
    <Fragment>
      <div>Hello {props.albumId}</div>
      <div>this page works {props.bandId}</div>

      {props.album.map((e) => {
        return (
          <div
            onClick={() => {
              props.getAlbumId(e.idAlbum);
            }}
          >
            <div>{e.strAlbum}</div>
          </div>
        );
      })}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  album: state.albumReducer.albumCollection,
  albumId: state.albumReducer.albumId,
  bandId: state.bandReducer.bandId,
});

export default connect(mapStateToProps, { fetchAlbum, getAlbumId })(AlbumName);
