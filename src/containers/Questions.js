import React, { Component } from 'react';
import Question from '../components/Question';

export default class Questions extends Component {
  state = {
    questions: null,
    incrementor: 0,
    backgroundcolour: "white"
  }

  getQuestions = () => {
    let API = `https://opentdb.com/api.php?amount=10&category=${this.props.properties.category}&difficulty=${this.props.properties.difficulty}&type=multiple`
    fetch(API)
    .then(data => data.json())
    // .then(data => console.log(data.results))
    .then(data => this.setState({
      questions: data.results
    }))
  }


  // resetColour: resets background state 

  incrementor = () => {
    this.setState({incrementor: this.state.incrementor + 1})
// resetColour() 
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div>
        <p>I am Questions</p>
        <p>{this.props.properties.category}</p>
        <p>{this.props.properties.difficulty}</p>
        {/* {this.state.questions !== null ? this.state.questions[this.state.incrementor].question : null} */}
        {this.state.questions !== null ? <Question button={this.incrementor} colour={this.state.backgroundcolour} question={this.state.questions[this.state.incrementor]}/> : null}
        {/* <button onClick={this.incrementor}>Next</button> */}
        {/* {this.state.questions !== null ? this.state.questions.map((question, index) => ( */}
          {/* <p key={index}>{question.question}</p>
        )) : null} */}
      </div>
    )
  }
}
