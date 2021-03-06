import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

const StoreProvider = ({ children }) => {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [fourth, setFourth] = useState('')
  const [fifth, setFifth] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [user, setUser] = useState('')
  const [expressions, setExpressions] = useState([])

  const [difficulty, setDifficulty] = useState('easy')

  const store = {
    first,
    setFirst,
    second,
    setSecond,
    third,
    setThird,
    fourth,
    setFourth,
    fifth,
    setFifth,
    loading,
    setLoading,
    error,
    setError,
    user,
    setUser,
    expressions,
    setExpressions,
    difficulty,
    setDifficulty,
  }
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export default StoreProvider
