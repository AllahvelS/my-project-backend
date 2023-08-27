const db = require("../db/dbConfig.js");

const getAllNotes = async () => {
  try {
    const allNotes = await db.any("SELECT * FROM notes");
    return allNotes;
  } catch (error) {
    return error;
  }
};

const getNote = async (id) => {
  try {
    const oneNote = await db.one("SELECT * FROM notes WHERE id=$1", id);
    return oneNote;
  } catch (error) {
    return error;
  }
};

const createNote = async (note) => {
  try {
    const newNote = await db.one(
      "INSERT INTO notes (title, content, folder, date_created, last_edited, account_name, is_important) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [note.title, note.content, note.folder, note.date_created, note.last_edited, note.account_name, note.is_important]
    );
    return newNote;
  } catch (error) {
    return error;
  }
};

const deleteNote = async (id) => {
    try {
      const deletedNote = await db.oneOrNone("DELETE FROM notes WHERE id = $1 RETURNING *", id);
      return deletedNote;
    } catch (error) {
      return error;
    }
  };
  

const updateNote = async (id, note) => {
  try {
    const updatedNote = await db.one(
      "UPDATE notes SET title=$1, content=$2, folder=$3, date_created=$4, last_edited=$5, account_name=$6, is_important=$7 WHERE id=$8 RETURNING *",
      [note.title, note.content, note.folder, note.date_created, note.last_edited, note.account_name, note.is_important, id]
    );
    return updatedNote;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
};
