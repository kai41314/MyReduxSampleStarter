import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import reducers from './reducers';

const API_KEY = 'AIzaSyBkY-aDkBseLmJ-kzIcgU9fPZYDEnvqXU8';

class App extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = { 
        videos: [],
        selectedVideo: null
      };
      
      YTSearch({key: API_KEY, term: 'violin'}, (videos) => {
        this.setState({videos: videos, selectedVideo: videos[0]});        
      });      
    }

    render(){
      return (
        <div>
          <SearchBar/>
          <VideoDetail video = { this.state.selectedVideo } />
          <VideoList 
            onVideoSelect = { selectedVideo => this.setState({selectedVideo})} 
            videos = { this.state.videos } />
        </div>
      );
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
