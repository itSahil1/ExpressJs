// Responsive website

const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');
const requests = require('requests');
const port = 7000;

// built in middleware

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, "../templates/views");

const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engine 
app.set('view engine', "hbs");

app.set('views',templatePath);

hbs.registerPartials(partialsPath);

  app.use(express.static(staticPath));

 // template engine route
 app.get("/", (req, res) => {
     res.render("index", {
        channelName : "Old Ques" ,
     });
 });


 app.get('/about', (req, res) => {
  requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=a66fcaceac6f23c78cc73b93e7575808`)
  .on('data', (chunk) => {
    const objdata = JSON.parse(chunk);
    if (objdata && objdata.main && objdata.main.temp && objdata.name) {
      const arrData = [objdata];
      console.log(`The city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
      res.write(`The city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
    } else {
      console.log('Error: Invalid data received');
      res.write('Error: Could not retrieve weather data. Please check the city name.');
    }
  })
  .on('end', (err) => {
    if (err) {
      console.log('Connection closed due to errors', err);
      res.write('Error: Connection closed due to errors');
    }
    res.end();
  });
});


app.get('/about/*', (req, res) => {
    res.render("404", {
      errorcomment : "Oops this about us page doesn't found",
    });
  })

app.get('*', (req, res) => {
  res.render("404", {
    errorcomment : "Oops page doesn't found",
  });
})

app.listen(port, () => {
    console.log(`listening to the port no. at ${port}`);
});




  