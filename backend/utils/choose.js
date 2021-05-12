const choose = (data) => {
  let index = []
  let newData = []

  while (index.length <= 4) {
    let r = Math.floor(Math.random() * data.length)
    if (index.indexOf(r) === -1) index.push(r)
  }
  index.forEach((elem) => newData.push(data[elem]))
  return newData
}

export default choose
