import React from 'react';

class VideoCard extends React.Component {
    render() {
        const { description, title, thumbnails } = this.props.video;
        
        return (
            <div>
                <img 
                    alt={description} 
                    src={thumbnails.defaul.url} />
            </div>
            <div>{title}</div>
        )
    }
}

export default VideoCard;