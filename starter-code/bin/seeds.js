const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const array = [
  {
    name: "Robert Downey Jr.",
    occupation: "actor",
    catchphrase: "I'm Ironman",
  },

  {
    name: "Owen Wilson",
    occupation: "actor",
    catchphrase: "Wow!",
  },

  {
    name: "Britney Spears",
    occupation: "singer",
    catchphrase: "It's Britney, bitch.",
  },
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Celebrity.create(array)
      .then((celebritiesFromDB) => {
        console.log(`${celebritiesFromDB.length} celebrities have been added.`);
      })
      .catch((err) => console.log("err", err));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
