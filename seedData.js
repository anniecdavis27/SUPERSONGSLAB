const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Song = require("./models/Song");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Song.deleteMany({});

  const songs = [
    { title: "happy", artist: "pharell williams", time: "5:36" },
    { title: "party rock anthem", artist: "lmfao", time: "4:05" },
    { title: "imagine", artist: "john lennon", time: "2:50" },
    { title: "call me", artist: "blondie", time: "6:19" },
    { title: "my heart will go on", artist: "celine dion", time: "3:47" },
    { title: "free bird", artist: "lynyrd skynyrd", time: "9:05" },
    { title: "stairway to heaven", artist: "led zepplin", time: "10:05" },
  ];

  await Song.insertMany(songs);
  console.log("Created some items!");
};
const run = async () => {
  await main();
  db.close();
};

run();
