const songs = require("../Model/model");

// add a data
const addData = (req, res) => {
  const data = req.body;
  // this is an object and it has a schema to  structure it properly
  const docs = new songs(data);
  docs
    .save()
    .then(res.json({ songs: "data added" }))
    .catch((err) => {
      console.log(err);
    });
};
// find all and display
const findAll = async (req, res) => {
  const result = await songs.find().sort({ createdAt: -1 });

  res.json({ songs: result });
};

// find one and display details
const FindOne = async (req, res) => {
  //req.params is an object

  const id = req.params.id;

  const result = await songs.findById(id);
  res.json({ songs: result });
};

// delete document by id
const deleteData = async (req, res) => {
  const id = req.params.id;
  const result = await songs.findByIdAndDelete(id);
  res.json({ redirect: result });
};

// render update page
const updatePage = async (req, res) => {
  const id = req.params.id;

  const result = await songs.findById(id);

  res.render("update", { id: id, songs: result });
};

// update document in the db
const change = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const result = await songs.findByIdAndUpdate(
    id,
    {
      title: data.title,
      artist: data.artist,
      imgUrl: data.imgUrl,
      genre: data.genre,
    },
    { new: true }
  );
  res.json({ song: result });
};

// export the handlers

module.exports = {
  addData,
  findAll,
  FindOne,
  deleteData,
  updatePage,
  change,
};
