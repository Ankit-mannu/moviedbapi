import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {

  async function getMovieList() {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
    console.log(responseJson);
	}

  const movieData= getMovieList();
  
  return (
    
    <div class="grid-container">
        <header class="header">
        </header>
        
        <main class="main">
          <div class="content">
            <ul class="products">
             <li>
                <div class="product">
                    <img class="product-image"src="war.jpeg" alt="product"/>
                    <div class="product-name"><a href="product.html"> The Tommorow war</a></div>
                    <div class="product-brand"> Movie</div>
                    <div class="product-price">4.5 Stars</div>
                    <div class="product-rating"> (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                    <img class="product-image"src="avengers.jpeg" alt="product"/>
                    <div class="product-name"><a href="product.html">Avengers Infinity</a></div>
                    <div class="product-brand">American Movie</div>
                    <div class="product-price">4.5 Stars</div>
                    <div class="product-rating"> (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                    <img class="product-image"src="bahubali.jpeg" alt="product"/>
                    <div class="product-name"><a href="product.html">Bahubali</a></div>
                    <div class="product-brand">Indian Movie</div>
                    <div class="product-price"></div>
                    <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              </ul>
            </div>
        </main>
        <footer class="footer">
            All right reserved.
        </footer>
    </div>
  );
}

export default App;
