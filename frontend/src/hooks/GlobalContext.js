import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

const StoreProvider = ({ children }) => {
  const [answOne, setAnswOne] = useState('')
  const [answTwo, setAnswTwo] = useState('')
  const [answThree, setAnswThree] = useState('')
  const [answFour, setAnswFour] = useState('')
  const [answFive, setAnswFive] = useState('')
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [playCount, setPlayCount] = useState(0)

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
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError,
    playCount,
    setPlayCount,
  }
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export default StoreProvider
