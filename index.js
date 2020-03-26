require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const Notes = require("./notes-helper.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/api/notes/get/all", async (req, res) => {
  try {
    const notes = await Notes.getAll();
    res.status(200).json(notes);
  } catch (e) {}
});

server.get("/api/notes/get/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Notes.getById(id);
    res.status(201).json(note);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong with the server" });
  }
});

server.post("/api/notes/create", async (req, res) => {
  const note = req.body;

  try {
    const id = await Notes.create(note);
    res.status(202).json({ success: id });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong with the server" });
  }
});

server.put("/api/notes/edit/:id", async (req, res) => {
  const { id } = req.params;
  const note = req.body;

  try {
    const updatedNote = await Notes.update(note, id);
    res.status(202).json(updatedNote);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong with the server" });
  }
});

server.delete("/api/notes/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Notes.remove(id);
    res.status(201).json({ message: "Note successfully deleted." });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong with the server" });
  }
});

const port = process.env.PORT || "5000";

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
