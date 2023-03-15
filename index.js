const express = require("express");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movies = [{title:"The Matrix", Genre: "Sci-Fi" }, {title:"Star Wars", Genre: "Space Opera" }];

app.post("/movies", (req, res) => {
    movies.push(req.body)
    res.json(movies);
})


app.get("/movies", (req, res) => {
    res.json(movies)
}
);



app.listen(5000, () => {
    console.log("listening on port 5000!")
});