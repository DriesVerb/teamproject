import React,{useEffect} from 'react'
import {FetchVideoLink } from '../actions/getTubeLinkAction'
import {connect} from 'react-redux'

const YouTubeLink =props=> {

    useEffect(()=>{
      props.FetchVideoLink()
      console.log(props.videoLinks[0].strMusicVid)
    },[])
   
    return (
        <div>
        <h1>test</h1>
        {
            props.videoLinks.map((link)=>{
                return (
                    <div>{link.strMusicVid}</div>
                )
            })
        }
        {/*  {console.log(props.videoLinks)}
            {props.videoLinks.map((link,index)=>{
                return(
                    <div key={index}>
                      <div>{link.strMusicVid}</div>      
                        
                    </div>
                )
            })}; */}
           
        
        </div>
    )
};

const mapStateToProps =(state)=>({
videoLinks: state.youTubeLinkReducer.linksOfVideos,
});

export default connect(mapStateToProps,{FetchVideoLink})(YouTubeLink);