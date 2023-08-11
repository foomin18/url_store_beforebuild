import React, {Component} from 'react';
import Navbar from './components/Navbar';
import URLList from './components/URLList';
import { urls } from './data_input/urls';
import { genres } from './data_input/genres';
import Scroll from './components/Scroll';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: 'Home'
      //filteredURLs: urls
    };

    this.genres = [
      'Home',
      ...genres
    ];

    this.handleSelectGenre = this.handleSelectGenre.bind(this);  //Arrow関数にするならいらない
    //this.handleFilteredURLs = this.handleFilteredURLs.bind(this);
  }

  handleSelectGenre(genre) {
    this.setState({
      selectedGenre: genre
    });
  }

  // handleFilteredURLs(selectedGenre) {
  //   if (selectedGenre === 'AllGenres') {
  //     this.setState({filteredURLs: urls});
  //   } else {
  //     this.setState({filteredURLs: urls.filter((url) => url.genre === selectedGenre)});
  //   };
  // }

  render() {
    //this.handleFilteredURLs(this.state.selectedGenre);
  
    return (
      <div className='tc'>
        <Navbar genres={this.genres} selectedGenre={this.state.selectedGenre} onSelectGenre={this.handleSelectGenre} /> {/*propとして子に渡す */}  
        <Scroll>
          <URLList selectedGenre={this.state.selectedGenre} urls={urls} />
        </Scroll>
      </div>
    );
  }
}

export default App;
