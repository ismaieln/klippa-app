import axios from 'axios'

const updateRecord = async (user, playInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  }

  const { data } = await axios.put(
    `/user`,
    (user.playHistory[0] = { playInfo }),
    config
  )

  return data
}

export default updateRecord
