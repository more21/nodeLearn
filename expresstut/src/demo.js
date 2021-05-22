const express = require("express");
const app = express();
const port = 3000

app.get("/", (req, res) => {
  res.send("hello from express ss");  
});

app.get("/about", (req, res) => {
    res.send(
        [{
            "id" : 1,
            "name" : "Nitin" 
        },
        {
            "id" : 2,
            "name" : "Rinku" 
        },
        {
            "id" : 3,
            "name" : "Maynak" 
        }]

    ); 
  });

app.listen(port, () => {
    console.log(`litsen ${port}`);
});