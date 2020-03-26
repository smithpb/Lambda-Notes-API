exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("notes").insert([
        {
          title: "First note",
          textBody: "Seeding the database with information"
        },
        {
          title: "Another Note",
          textBody: "Making everything look as nice as I can"
        },
        { title: "The Best Note", textBody: "What else can one say?" }
      ]);
    });
};
