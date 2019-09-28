import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  const renVideo = videos.map((video) => {
      return <VideoItem video={video} onVideoSelect={onVideoSelect}/>
  });
  return (
      <div className='ui relaxed divided list'>{renVideo}</div>
  )
}


export default VideoList;
