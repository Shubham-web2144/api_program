const express = require("express");
const mongoose = require("mongoose");
const data = require("./schema.js");
const cors = require("cors");

// initializing app
const app = express();
const PORT = 9000 || process.env.PORT;

// db configue
const url = `mongodb+srv://Admin:admin@cluster0.bgtqc.mongodb.net/programs?retryWrites=true&w=majority`;

mongoose.connect(
  process.env.MONGODB_URI || url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("not connected");
    }
  }
);

// midlewares
app.use(express.json());
app.use(cors());

// app endpoints
app.get("/v1", (req, res) => {
  res.status(200).send("hello");
});

app.post("/v2", (req, res) => {
  let body = req.body;
  data.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/v3", (req, res) => {
  data.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
const c = "c" || "C";
const java = "java" || "Java";
const js = "js" || "Javascript" || "javascript";

const name = "print-1";

app.get(`/category=${c}`, (req, res) => {
  data.find({ category: c }, (err, data) => {
    if (err) {
      res.status(500).send("Data not found", err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get(`/category=${java}`, (req, res) => {
  data.find({ category: java }, (err, data) => {
    if (err) {
      res.status(500).send("Data not found", err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get(`/category=${js}=${name}`, (req, res) => {
  data.find({ category: js, title: name }, (err, data) => {
    if (err) {
      res.status(500).send("Data not found", err);
    } else {
      res.status(200).send(data);
    }
  });
});

// a listener
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
