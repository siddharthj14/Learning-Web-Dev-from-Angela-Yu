import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  let type = " ";
  let adv = " ";
  if (day === 0 || day === 6) {
    type = "weekend";
    adv = "have some fun";
  } else {
    type = "weekday";
    adv = "work hard";
  }
  res.render("index.ejs", {
    day: type,
    do_: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
