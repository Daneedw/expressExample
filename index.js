const express = require("express");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let movies = [{ title: "The Matrix", Genre: "Sci-Fi", id: 1 }, { title: "Star Wars", Genre: "Space Opera", id: 2 }];

let currentId = 3;

app.post("/movies", (req, res) => {

    movies.push({ ...req.body, id: currentId })
    currentId++;

    res.json(movies);
})
app.put("/movies/:id", (req, res) => {
console.log(req.params.id)
console.log(req.params.body)

    movies = movies.map(movie => {


        if (movie.id === req.params.id) {
            console.log("change")
            return { ...req.params.body };


        }

        else return movie;

    })


    res.json(movies);
})


app.get("/movies", (req, res) => {
    res.json(movies)
}
);



app.listen(5000, () => {
    console.log("listening on port 5000!")
});