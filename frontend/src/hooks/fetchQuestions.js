import axios from 'axios'

const fetchQuestions = async () => {
  const { data } = await axios.get('/api/expression')

  localStorage.setItem('qInfo', JSON.stringify(data))
}

export default fetchQuestions
