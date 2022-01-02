
let express = require("express")
let app = express()
app.use(express.static(__dirname + '/assets'));
app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/assets/index.html`)
})
app.get("/AAaAgVlEAWvUCVLTXbWv", (req, res) => {
  res.sendFile(`${__dirname}/assets/newspaper.jpg`)
})
app.post("/secret", (req, res) => {
  switch (req.body.cipher) {
    case "VvEOGxJcBi34FmLhnt08YgKX23eCu8":
      res.redirect("/?answer=2DH5t8xVvJSoYotBDekEPgS1kY1xYbJa")
      break
    case "r95qSu7XdXbh8o9ZiXNMthiTTaijAYOd":
      res.redirect("https://nivalis-secret.netlify.app")
      break
    case "dSVqyFEoUEAhPVzoFEtD":
      res.redirect("/AAaAgVlEAWvUCVLTXbWv?method=gronsfeld")
    default:
      res.redirect("/?answer=nay")
  }
})

app.listen(3000, () => console.log("server has started !"))


