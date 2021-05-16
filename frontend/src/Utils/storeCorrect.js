const storeCorrect = () => {
  const questionsFromStorage = localStorage.getItem('qInfo')
    ? JSON.parse(localStorage.getItem('qInfo'))
    : []

  const answersFromStorage = localStorage.getItem('answers')
    ? JSON.parse(localStorage.getItem('answers'))
    : []

  for (let i = 0; i < 5; i++) {
    if (questionsFromStorage[i].answer === answersFromStorage[i]) {
      console.log(`Answer # ${i} is correct`)
    } else {
      console.log(`Answer # ${i} is wrong`)
    }
  }
  return true
}

export default storeCorrect
