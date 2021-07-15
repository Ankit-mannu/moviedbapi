import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import './index.css';
import ReactPlayer from 'react-player';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {

    const search = this.props.location.search;
    const movieUid = new URLSearchParams(search).get("id");
    

    var url = 'https://api.themoviedb.org/3/movie/'+ movieUid +'?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1';

  fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result); 
        this.setState({
          isLoaded: true,
          items: result
        });
      });
  }

  render() {
    
    const { items,isLoaded } = this.state;
    if (isLoaded==false) {
      return <div>Loading ... </div>;
    } else {
      console.log(items);
      return (

        <div class="grid-container">
    <header class="header">
        <div class="brand">
            <a href="index.html">Movie</a>
        </div>
    </header>
    <main class="main">
      <div class="content">
        <ul class="products">
            <ul>
                
                  <li>
                  <div class="product">
                      <img class="product-image" src={"http://image.tmdb.org/t/p/w500"+items.poster_path} alt={items.title}/>
                      <div class="product-name"><a href={"movie-details/"+items.id}>{items.original_title}</a></div>
                      <div><span>Add to Favourite</span></div>
                      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://content.jwplatform.com/manifests/yp34SRmf.m3u8'
          playing
          controls
          playIcon={<button class="video-preview">Preview</button>}
  light="https://i.stack.imgur.com/zw9Iz.png"
          config={{
            file: {
              forceHLS: true,
            }
          }}
        />
      </div>
      
                      <button type="button">Add to Favourite</button>
                  </div>
              </li>
            
              </ul>
        </ul>
    </div>
    </main>
    
</div>
      );
    }
  }
}

export default MovieDetails;