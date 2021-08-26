const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const Photo = require("./models/Photo");

const posts = require("./controllers/postController");
const pages = require("./controllers/pageController");

//Connect db
mongoose.connect("mongodb+srv://izbaris:Zaferbeni7o.@cluster0.udphg.mongodb.net/izbaris-blog?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> {
  console.log("DB connected!")
}).catch((err)=>{
  console.log(err)
});

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MiddleWares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTE
app.post("/photos", posts.addPost);
app.get("/",posts.getAllPosts);
app.get("/photos/:id", posts.getPost);

app.get("/about",pages.getAboutPage);
app.get("/add_post",pages.getAddPostPage);
app.get("/post",pages.getPostPage );

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
