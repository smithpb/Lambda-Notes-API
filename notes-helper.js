const db = require("./data/dbConfig.js");

module.exports = {
  getAll,
  create,
  update,
  remove
};

function getAll() {
  return db("notes");
}

async function create(note) {
  const [{ _id }] = await db("notes").insert(note, ["_id"]);
  return getById(_id);
}

async function update(note) {
  const [{ _id }] = await db("notes")
    .where("_id", note._id)
    .update(note, ["_id"]);
  return getById(_id);
}

function remove(id) {
  return db("notes")
    .where("_id", id)
    .del();
}

function getById(id) {
  return db("notes")
    .where({ id })
    .first();
}
