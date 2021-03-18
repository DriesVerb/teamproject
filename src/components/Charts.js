import React, { useEffect } from "react";
import { fetchMusicCharts } from "../actions/GetMusicAction";
import { connect } from "react-redux";

const Charts = (props) => {
  useEffect(() => {
    props.fetchMusicCharts();
    console.log(props.charts);
  }, []);

  // const chartItems = props.charts.tracks.data?.map((tracks, index) => {
  //   return (
  //     <div>
  //       <div>
  //         <h1>Hello</h1>
  //         {tracks.name}
  //       </div>
  //     </div>
  //   );
  // });

  return <div>{props.charts.album.name}</div>;
};

const mapStateToProps = (state) => ({
  charts: state.musicReducer.music1,
});

export default connect(mapStateToProps, { fetchMusicCharts })(Charts);
