 const path = require("path");
 const express = require("express");
 const app = express();
 
 // relative absolute
 
 //console.log(__dirname);
 //console.log(path.join(__dirname, "../public"));
 
 const staticPath = path.join(__dirname, "../public")
 
 // builtin middleware
 app.use(express.static(staticPath));
 
 app.get("/", (req, res) => {
     res.send("helo world from express");
 });
 
 app.listen(8000, () => {
     console.log("listing at port no. at 8000");
 });


