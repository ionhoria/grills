import React from 'react'
import Card from './Card'

const List = ({ questions }) => {
  function onSubmit (checked) {
    console.log(checked)
  }

  return (
    <div>
      {questions.map(question => (
        <Card key={question.id} question={question} onSubmit={onSubmit} />
      ))}
    </div>
  )
}

export default List
