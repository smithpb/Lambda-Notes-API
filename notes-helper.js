const db = require("./data/dbConfig.js");

module.exports = {
  getAll,
  create,
  update,
  remove,
  getById
};

function getAll() {
  return db("notes");
}

async function create(note) {
  const [{ _id }] = await db("notes").insert(note, ["_id"]);
  return _id;
}

async function update(note, id) {
  await db("notes")
    .where("_id", id)
    .update(note, ["_id"]);
  return getById(id);
}

function remove(id) {
  return db("notes")
    .where("_id", id)
    .del();
}

function getById(id) {
  return db("notes")
    .where("_id", id)
    .first();
}
