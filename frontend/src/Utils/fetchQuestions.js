import axios from 'axios'
import arrangeData from './arrangeData'

const fetchQuestions = async (difficulty) => {
  const { data } = await axios.get(`/expression`)
  const finalData = await arrangeData(data, difficulty)
  localStorage.setItem('qInfo', JSON.stringify(finalData))
  return finalData
}

export default fetchQuestions
