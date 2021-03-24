import React, { Fragment, useEffect } from "react";
import { fetchAlbum, getAlbumId, showTracks } from "../actions/AlbumAction";
import { connect } from "react-redux";
import TopTracks from "./TopTracks";

const AlbumName = (props) => {
  useEffect(() => {
    props.fetchAlbum(props.bandId);
  }, [props.bandId]);

  return (
    <Fragment>
      {props.tracksVis ? <TopTracks /> : null}
      {<div>{props.albumId}</div>}
      {props.album.map((e, index) => {
        return (
          <div
            onClick={() => {
              props.getAlbumId(e.idAlbum);
              props.showTracks();
              console.log(props.albumId);
            }}
            key={index}
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
  tracksVis: state.albumReducer.tracksVisible,
  albumId: state.albumReducer.albumId,
  bandId: state.bandReducer.bandId,
});

export default connect(mapStateToProps, { fetchAlbum, getAlbumId, showTracks })(
  AlbumName
);
