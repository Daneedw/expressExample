const express = require("express");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post("/", (req, res) => {
    console.log(req.body)
    res.json(req.body);
})


app.get("/movies", (req, res) => {
    res.json([{title:"The Matrix", Genre: "Sci-Fi" }, {title:"Star Wars", Genre: "Space Opera" }])
}
);



app.listen(5000, () => {
    console.log("listening on port 5000!")
});