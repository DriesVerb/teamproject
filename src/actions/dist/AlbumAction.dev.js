"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAlbum = void 0;

var fetchAlbum = function fetchAlbum(inputAlbum) {
  fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=".concat(inputAlbum)).then(function (res) {
    return res.json();
  }).then(function (data) {
    dispatch({
      type: 'FETCH_ALBUM',
      payload: data.album[0]
    });
  });
};

exports.fetchAlbum = fetchAlbum;