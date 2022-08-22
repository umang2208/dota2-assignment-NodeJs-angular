const express = require("express");
const axios = require("axios");

const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.json());


const request = require("request");
app.get("/getData/:value", (req, res) => {
  //   console.log(req.params.value);
 	const lang = req.params.value;
	// console.log(lang);

  request(
    `https://www.dota2.com/datafeed/herolist?language=${lang}`,
    function (error, response, body) {
      console.error("error:", error); // Print the error if one occurred
    //   console.log(response);
      //   res.send(response);
      res.json(body);
    }
  );
});

app.get("/getHeroData/:value/:lang", (req, res) => {
	//   console.log(req.params.value);
	const id = req.params.value;
	const lang = req.params.lang;
	console.log(lang);
	console.log(id);
	request(
	  `https://www.dota2.com/datafeed/herodata?language=${lang}&hero_id=${id}`,
	  function (error, response, body) {
		console.error("error:", error); // Print the error if one occurred
		// console.log(response);
		//   res.send(response);
		res.json(body);
		  return;
		
	  }
	);
  });
app.listen(port, () => console.log("listen to post no " + port));
