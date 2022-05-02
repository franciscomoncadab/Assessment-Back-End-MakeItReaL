const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({
  path: '.env',
});
const app = express()

app.use(express.json())

//const URI = process.env.DB_URI
  
mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });


  const noteSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
      },
      important: Boolean,
      date: String,
    },
    {
      timestamps: true,
    },
    
  );
  const Note = mongoose.model("Note", noteSchema);  


  app.get('/', (req, res) => {
    res.send('<h1>Listen server on localhost</h1>')
  })

  app.get('/api/notes', async (req, res) => {
    try {
      const notes = await Note.find({})
      res.json(notes);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: err.message})
    }
  });

  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    
    if(note) {
      res.json(note)
    } else {
      res.status(404).end()
    }
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
  })

  app.post('/api/notes', async (req, res) => {
    const body = req.body 
    console.log(body)
    if (!body.content) {
      return res.status(400).json({ message:'Content is missing'})
    };
  
    try {
      const newNote = new Note({
        content: req.body.content,
        important: req.body.important,
        date: new Date().toISOString(),
      });
      const savedNote = await newNote.save();
      return res.status(201).json(savedNote);
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: error.message });
  }
  });

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`)
})
