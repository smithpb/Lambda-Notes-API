require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const Notes = require("./notes-helper.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/api/notes", async (req, res) => {
  try {
    const notes = await Notes.getAll();
    res.status(200).json(notes);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong with the server" });
  }
});

server.listen("5000", () => {
  console.log("Server is listening on port 5000");
});
