// node_modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import {YOUTUBE_API_KEY} from './keys';
import _ from 'underscore'

// Our modules
import SearchBar from './components/search_bar'
import BaseComponent from './components/base_component'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// Create  new component to produce some html
class App extends BaseComponent {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this._bind('videoSearch')
    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  // this not bound properly here.
  getVideos(term='surfboards') {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({ videos })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}

// Then insert the component into the DOM

ReactDOM.render(<App />, document.querySelector('.container'))