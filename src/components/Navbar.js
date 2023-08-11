import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {  //Genreの状態
      isGenreOpen: false,
    };

    this.toggleGenreColumn = this.toggleGenreColumn.bind(this);
  }

  toggleGenreColumn() {
    this.setState((prevState) => ({
      isGenreOpen: !prevState.isGenreOpen  //反転操作
    }));
  }

  render() {
    const { genres, selectedGenre, onSelectGenre } = this.props;
    const { isGenreOpen } = this.state;

    const genresArray = genres.map((genre) => {
      if(genre !== 'Home') {
        return (
          <li key={genre}>
            <button onClick={() => {
                onSelectGenre(genre);
                this.setState((prevState) => ({
                isGenreOpen: false
              }));
              }}>
              {genre}
            </button>
          </li>
        );
      }
      return null;
    });

    return (
      <nav className="navbar">
        <button className="navbar-toggle" onClick={this.toggleGenreColumn}>
        <h2>&nbsp;≡</h2>
        </button>
        <h2 className='genre_here'>This is {selectedGenre}</h2>
        <button className='orange btn btn-lg' onClick={() => {
            onSelectGenre('Home');
            this.setState((prevState) => ({
              isGenreOpen: false
            }));
          }}>
          Go Home
        </button>
        <ul className={`navbar-genres ${isGenreOpen ? 'open' : ''}`}> 
          {genresArray}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

// import React from 'react';
// import './Navbar.css';

// const Navbar = ({ genres, onSelectGenre}) => {
//     const genresArray = genres.map((genre) => {
//         return (
//             <li key={genre}>
//                 <button onClick={() => onSelectGenre(genre)}>{ genre }</button>
//             </li>
//         );
        
//     })

//     return (
//         <nav className="navbar">
//             <ul>
//                 {genresArray}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;   
