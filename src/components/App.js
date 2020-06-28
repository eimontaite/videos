import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';

class App extends React.Component { 
    state = { videos: [] }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('', {
            params: { query: term },
            
        });

        this.setState({ videos: response.data.items });
        console.log(this.state.videos);
    }
    render() {
        return (
            <div className="ui container" style = {{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;