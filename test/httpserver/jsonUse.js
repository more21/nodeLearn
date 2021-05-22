const fs = require("fs");
const biodata = {
	color: "reds",
	value: "#f00"
};

const jsonData = JSON.stringify(biodata);

fs.writeFile("bio.json",jsonData, (err)=>{
    console.log("done");
});

fs.readFile("bio.json","utf-8", (err,data)=>{
    console.log(data);
});