const Photo = require('../models/Photo');

exports.getAllPosts = async (req, res) => {
    const page =  req.query.page  || 1 ;
    const photoPerPage = 2;
    const totalPhotos = await Photo.find().countDocuments();

  const photos = await Photo.find({})
  .sort("-dateCreated")
  .skip((page-1) * photoPerPage) 
  .limit(photoPerPage)

  res.render("index", {
    photos:photos,
    current:page,
    pages:Math.ceil((totalPhotos / photoPerPage))
  });
};
exports.getPost = async (req, res) => {
  const photos = await Photo.findById(req.params.id);
  console.log(photos);
  res.render("post", {
    photos,
  });
};

exports.addPost  =async (req, res) => {
    await Photo.create(req.body);
    res.redirect("/");
  }