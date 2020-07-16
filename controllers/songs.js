const express = require("express");
const router = express.Router();
const Song = require("../models/Song");
const { json } = require("express");

//all songs
router.get("/", (req, res) => {
  Song.find({}, (error, songs) => {
    if (error) console.log(error);
    else res.json(songs);
  });
});

router.get("/faves", (req, res) => {
  Song.find({ isFavorite: true }, (error, songs) => {
    if (error) console.log(error);
    else res.json(songs);
  });
});

// song by id
router.get("/:id", (req, res) => {
  Song.findById(req.params.id, (error, song) => {
    if (error) console.log(error);
    else res.json(song);
  });
});
// get by title
router.get("/title/:title", (req, res) => {
  Song.find({ title: req.params.title }, (error, title) => {
    if (error) console.log(error);
    else res.json(title);
  });
});

//get by artist name
router.get("/artist/:artist", (req, res) => {
  Song.find({ artist: req.params.artist }, (error, title) => {
    if (error) console.log(error);
    else res.json(title);
  });
});

//post new song
router.post("/", (req, res) => {
  Song.create(req.body, (error, song) => {
    if (error) console.log(error);
    else res.json(song);
  });
});

//update
router.put("/:id", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

//delete
router.delete("/:id", (req, res) => {
  Song.findByIdAndRemove(req.params.id, (error, song) => {
    if (error) console.log(error);
    else res.json(song);
  });
});

//change from false to true
router.put("/:id/fav", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { isFavorite: true },
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

// remove favs
router.put("/:id/fav/remove", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { isFavorite: false },
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

module.exports = router;
