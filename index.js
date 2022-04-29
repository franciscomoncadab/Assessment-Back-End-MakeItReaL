const express = require('express')
const app = express()

app.use(express.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]


  app.get('/', (request, response) => {
    response.send('<h1>Listen server on localhost</h1>')
  })

  app.get('/api/notes', (request, response) => {
    response.json(notes)
  })

  app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if(note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
  })

  app.post('/api/notes', (request, response) => {
    const note = request.body 
    if (!note || !note.content) {
      return response.status(400).json({ message:'Content is missing'})
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)
    
    const newNote = {
      id: maxId + 1,
      content: note.content,
      important: typeof note.important !== 'undefined' ? note.important : false,
      date: new Date().toISOString()
    }
    notes =[...notes, newNote];
    response.json(newNote)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`)
})
