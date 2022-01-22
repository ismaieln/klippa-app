import axios from 'axios'

const updateRecord = async (user, total, success, fail) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  }

  const { data } = await axios.patch(
    `/user`,
    (user.playHistory[0] = { total, success, fail }),
    config
  )

  return data
}

export default updateRecord
