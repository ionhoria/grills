import React, { Component } from 'react'
import List from './components/List'
import questions from './data'

class App extends Component {
  render () {
    return (
      <div>
        <List questions={questions} />
      </div>
    )
  }
}

export default App
