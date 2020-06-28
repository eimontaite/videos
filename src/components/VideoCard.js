import React from 'react';

class VideoCard extends React.Component {
    render() {
        const { description, snippet } = this.props.video;
        
        return (
            <div>
                <img 
                    alt={description} 
                    src={snippet.thumbnails.default.url} />
                    <p>{snippet.title}</p>
            </div>
        )
    }
}

export default VideoCard;