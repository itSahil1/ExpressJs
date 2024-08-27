const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("helo world from express");
});

app.get("/about", (req, res) => {
  res.send("<h1>about from express</h1>");
   
});


app.get("/temp", (req, res) => {
    res.send([
        {
        id: 1,
        name: "sahil",
    },
    {
        id: 1,
        name: "sahil",
    },
    {
        id: 1,
        name: "sahil",
    }
]);
});

app.get("/contact", (req, res) => {
    res.json([
        {
        id: 1,
        name: "deepak",
    },
    {
        id: 1,
        name: "sahil",
    },
    {
        id: 1,
        name: "sahil",
    }
]);
});

app.listen(3000, () => {
    console.log("listing at port no. at 3000");
});


// The methods are identical when an object or array is passed,
// but res.json() will also convert non-objects,
//such as null and undefined, which are not valid JSON