import express from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use('dist')

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
