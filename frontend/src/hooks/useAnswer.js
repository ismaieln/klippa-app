import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const useAnswer = (_id) => {
  const { setAnswOne, setAnswTwo, setAnswThree, setAnswFour, setAnswFive } =
    useContext(GlobalContext)

  const valueTyped = (e) => {
    switch (_id) {
      case '0':
        setAnswOne(e.target.value)
        break
      case '1':
        setAnswTwo(e.target.value)
        break
      case '2':
        setAnswThree(e.target.value)
        break
      case '3':
        setAnswFour(e.target.value)
        break
      case '4':
        setAnswFive(e.target.value)
        break
      default:
        break
    }
  }

  return [valueTyped]
}

export default useAnswer
