import React, { useEffect } from "react";
import { connect } from "react-redux";
import {FetchAlbums} from "../actions/AlbumAction"

const Album = (props) => {
  useEffect(() => {
    props.FetchAlbums();
    console.log(props);
  }, []);

  return (
    <div>
      {props.albumProps &&
        props.albumProps.map((album, index) => {
          return (
            <div key={index}>
              <div> {album.name}</div>
              
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
 albumProps : state.AlbumReducer.album
});

export default connect(mapStateToProps, {FetchAlbums})(Album);