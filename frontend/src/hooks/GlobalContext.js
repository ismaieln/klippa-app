import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

const StoreProvider = ({ children }) => {
  const [answOne, setAnswOne] = useState('')
  const [answTwo, setAnswTwo] = useState('')
  const [answThree, setAnswThree] = useState('')
  const [answFour, setAnswFour] = useState('')
  const [answFive, setAnswFive] = useState('')
  const [flag, setFlag] = useState(false)
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitDisable, setSubmitDisable] = useState(false)
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
    flag,
    setFlag,
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError,
    submitDisable,
    setSubmitDisable,
    playCount,
    setPlayCount,
  }
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export default StoreProvider
