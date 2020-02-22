import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import FFCharacters from './FFCharacters.json';
import Score from './components/Score/Score';


class App extends Component {

  state = {
    FFCharacters,
    score: 0,
    topScore: 12,
    FFCharactersChosen: [],
    message: "Click image to begin"


  };

  FFCharactersClicked = id => {
    let FFCharactersChosen = this.state.FFCharactersChosen
   
   if (FFCharactersChosen.includes(id)) {
      this.setState({
        FFCharactersChosen: [],
         score: 0,
         message: "You lost! Click again to play"
      });
   }
   else {
     FFCharactersChosen.push(id);

    if (FFCharactersChosen.length === 12) {
      this.setState({
        score: 12,
        message: "Winner! Click to play again!",
        FFCharactersChosen: []
      });

    return;

    }

  this.setState({
    score: FFCharactersChosen.length,
    message: "You Guessed correct!",
  });

  for (let i = FFCharacters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [FFCharacters[i], FFCharacters[j]] = [FFCharacters[j], FFCharacters[i]];
  }

}
}

render() {
  return (
    <>
  
      <Score 
       score={this.state.score}
       topScore={this.state.topScore}
       message={this.state.message}
      />


      <div className="row">
        {this.state.FFCharacters.map(FFCharacters => (
          <Wrapper
          
            FFCharactersClicked={this.FFCharactersClicked}
            id={FFCharacters.id}
            image={FFCharacters.image}
          />
        ))}
      </div>
    </>
  );

}
};

export default App;
