import React from 'react';
import VideoListItem from './video_list_item'
import BaseComponent from './base_component'

const VideoList = (props) => {

  const videoItems = props.videos.map((video, idx) => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      video={video}
      key={video.etag} />
  })

  return(
    <div className="col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;