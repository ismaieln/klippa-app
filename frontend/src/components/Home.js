import React from 'react'

import data from '../Utils/data.json'

const Home = () => {
  return (
    <div>
      {data.questions.map((question) => (
        <h1 key={question}>{question}</h1>
      ))}
    </div>
  )
}

export default Home
