import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const useAnswer = (id) => {
  const { setFirst, setSecond, setThird, setFourth, setFifth } =
    useContext(GlobalContext)

  const valueTyped = (e) => {
    switch (id) {
      case 0:
        setFirst(e.target.value)
        break
      case 1:
        setSecond(e.target.value)
        break
      case 2:
        setThird(e.target.value)
        break
      case 3:
        setFourth(e.target.value)
        break
      case 4:
        setFifth(e.target.value)
        break
      default:
        break
    }
  }
  return [valueTyped]
}

export default useAnswer
