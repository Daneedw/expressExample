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

    movies = movies.map(movie => {

        if (movie.id === parseInt(req.params.id)) {     
            return {...movie, ...req.body };
        }

        else return movie;

    })


    res.json(movies);
})


app.delete("/movies/:id", (req, res) => {

    movies = movies.filter(movie => {
        return movie.id !== parseInt(req.params.id)
    })


    res.json(movies);
})

app.get("/movies", (req, res) => {
    res.json(movies)
}
);



app.get("/movies/:id", (req, res) => {

    let [movie] = movies.filter(movie => movie.id === parseInt(req.params.id))
    res.json(movie)
}
);



app.listen(5000, () => {
    console.log("listening on port 5000!")
});