import './VideoList.css';
import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) => {
    let videos = props.videos.map((video) => {
        return <VideoCard key={video.id} video={video} />;
    })

    return (
    <div className="video-list">{images}</div>
    )
}

export default VideoList;