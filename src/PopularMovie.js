import React, { Component } from 'react';
import './index.css';
class PopularMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1')
      .then(res => res.json())
      .then(result => {
        console.log(result); 
        this.setState({
          isLoaded: true,
          items: result.results
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
                {items.map(item => (
                  <li>
                  <div class="product">
                      <img class="product-image" src={"http://image.tmdb.org/t/p/w500"+item.poster_path} alt={item.title}/>
                      <div class="product-name"><a href={"movie-details?id="+item.id}>{item.title}</a></div>
                      <div class="product-brand">Release Date {item.release_date}</div>
                      <div class="product-price">Vote {item.vote_count}</div>
                  </div>
              </li>
                ))}
              </ul>
        </ul>
    </div>
    </main>
    <footer class="footer">
        All right reserved.
    </footer>
</div>
      );
    }
  }
}

export default PopularMovie;