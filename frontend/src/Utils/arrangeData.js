const arrangeData = (data, difficulty) => {
  let index = []
  let finalData = []
  const filteredByDifficulty = data.filter((d) => d.difficulty === difficulty)

  while (index.length <= 4) {
    let r = Math.floor(Math.random() * filteredByDifficulty.length)
    if (index.indexOf(r) === -1) index.push(r)
  }
  index.forEach((elem) => finalData.push(filteredByDifficulty[elem]))
  return finalData
}

export default arrangeData
