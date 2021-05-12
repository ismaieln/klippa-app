import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (_id) => {
  const [expressions, setExpressions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/expression')
      setExpressions(data)
    }
    fetchData()
  }, [])

  return [expressions]
}

export default useFetch
