const express = require("express");
const notes = express.Router();
const { getAllNotes, getNote, createNote, deleteNote, updateNote } = require("../queries/notes");
const { checkBoolean, checkTitle } = require("../validations/checkNotes");



// INDEX
notes.get("/", async (req, res) => {
  const allNotes = await getAllNotes();
  if (allNotes[0]) {
    res.status(200).json(allNotes);
  } else {
    res.status(500).json({ error: "server error" });
  }
});


// SHOW
notes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const note = await getNote(id);
  if (note.title) {
    res.json(note);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
notes.post("/", checkBoolean, checkTitle, async (req, res) => {
  try {
    const note = await createNote(req.body);
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
notes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedNote = await deleteNote(id);
  if (deletedNote.id) {
    res.status(200).json(deletedNote);
  } else {
    res.status(404).json("note not found");
  }
});

// UPDATE
notes.put("/:id", checkBoolean, checkTitle, async (req, res) => {
  const { id } = req.params;
  const updatedNote = await updateNote(id, req.body);
  res.status(200).json(updatedNote);
});

module.exports = notes;
