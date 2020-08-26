import React, { Component } from 'react';
import './App.css';
import QuizQs from './Components/quizQs';
import ScoreDisplay from './Components/ScoreDisplay';

class App extends Component {
  state = {
    correctAnswers: ['C', 'C', 'C', 'C'],
    score: 0,
    showScore: false,
  }


  formSubmitHandler = e => {
    e.preventDefault();
    
    // eslint-disable-next-line no-restricted-globals
    scrollTo(0,0);
        
    const userAnswers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value];

    let newScore = this.state.score;
    userAnswers.forEach((ans, index) => {
      if(ans === this.state.correctAnswers[index]){
        newScore = newScore + 25;
      }
    })
    this.setState({score: newScore})
    this.setState({showScore: true})
    
  }

  closeScore = () => {
    this.setState({score: 0})
    this.setState({showScore: false})
  }
  render () {
    return (
      <div className="App">
        <ScoreDisplay 
          show={this.state.showScore}
          closed={this.closeScore}
          userScore={this.state.score}>
        </ScoreDisplay>
        <QuizQs 
          formSubmit={this.formSubmitHandler} 
          />                  
      </div>
    );
  }
};

export default App;
