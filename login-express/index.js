const express = require('express')
const app = express()
const port = 3001

// Store the login credentials in an array
const credentials = [
  { 'username': 'Abhishek', 'password': 12345 },
  { 'username': 'user2', 'password': 'password2' },
  { username: 'user3', password: 'password3' }
]

// Set up middleware to handle incoming JSON data
app.use(express.json())

// Serve the login page at the root URL
app.get('/', (req, res) => {
  res.send(`<html>
    <body>
        <form action="/login" method="POST">
                Username:<input type="text" name="username">
                Password:<input type="password" name="password">
                <input type="submit" value="Submit">
        </form>
    </body>
</html>`)
})

// Handle the login request
app.post('/login', (req, res) => {
  const { username, password } = req.body

  // Check if the login credentials are correct
  const user = credentials.find(user => user.username == username && user.password == password)

  // Return a response based on whether the login was successful
  if (user) {
    res.send('Login successful')
  } else {
    res.status(401).send('Invalid username or password')
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
