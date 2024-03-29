const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
//     expiresIn: '7 days',
//   })
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// myFunction()
const pet = {
  name: 'chinki',
}

pet.toJSON = function () {
  // console.log(this)
  // return this
  return {}
}
console.log(JSON.stringify(pet))
app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
