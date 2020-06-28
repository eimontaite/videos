import React from 'react';

class VideoCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0}

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans })
    }

    render() {
        const { description, snippet, id } = this.props.video;
        const url = "https://www.youtube.com/watch?v=".concat(id.videoId);
        
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <a href={url} target="_blank"> 
                    <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={snippet.thumbnails.default.url} />
                    <p>{snippet.title}</p>
                </a>
            </div>
        )
    }
}

export default VideoCard;