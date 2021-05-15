import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

const StoreProvider = ({ children }) => {
  const [answOne, setAnswOne] = useState('')
  const [answTwo, setAnswTwo] = useState('')
  const [answThree, setAnswThree] = useState('')
  const [answFour, setAnswFour] = useState('')
  const [answFive, setAnswFive] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [playCount, setPlayCount] = useState(0)
  const [user, setUser] = useState('')
  const [expressions, setExpressions] = useState([])
  const [flag, setFlag] = useState(false)

  const store = {
    answOne,
    setAnswOne,
    answTwo,
    setAnswTwo,
    answThree,
    setAnswThree,
    answFour,
    setAnswFour,
    answFive,
    setAnswFive,
    loading,
    setLoading,
    error,
    setError,
    playCount,
    setPlayCount,
    user,
    setUser,
    expressions,
    setExpressions,
    flag,
    setFlag,
  }
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export default StoreProvider
