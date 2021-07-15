const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.use(express.static("public"));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

router.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname + "/blog.html"));
});

router.get("/blog/:blogId", function (req, res) {
    console.log('Blog ID:', req.params.blogId);
  res.sendFile(path.join(__dirname + "/blog.html"));
});

app.use("/", router);

app.listen(8080, () => {
  console.log("Express server is running at port 8080");
});