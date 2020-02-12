const express = require("express");

const app = express();

const port = 3000;

app.listen(port, (err) => {
	if (err) {
    return console.log("Error: ", err);
  }
	console.log("Server is listening on port " + port);
})

app.get("/api", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "GET"});
	}
});

app.post("/api", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "POST"});
	}
});

app.put("/api/:id", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "PUT"});
	}
});

app.delete("/api/:id", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "DELETE"});
	}
});