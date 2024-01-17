import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, response) => {
  response.send("<h1>Hello world!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Siddharth</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +916376778223</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
