import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'john@example.com',
    password: bcrypt.hashSync('123', 10),
    playHistory: [
      {
        total: 12,
        success: 9,
        fail: 3,
      },
    ],
  },
  {
    name: 'i',
    email: 'i@example.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
