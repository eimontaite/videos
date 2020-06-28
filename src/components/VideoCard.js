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
        const { description, snippet } = this.props.video;
        
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={snippet.thumbnails.default.url} />
                    <p>{snippet.title}</p>
            </div>
        )
    }
}

export default VideoCard;