const express = require("express");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movies = [{title:"The Matrix", Genre: "Sci-Fi", id:1 }, {title:"Star Wars", Genre: "Space Opera" , id:2}];

let currentId= 3;

app.post("/movies", (req, res) => {
    movies.push(req.body)
    res.json(movies);
})
app.put("/movies/:id", (req, res) => {
    
   movies =  movies.map(movie =>{


        if(movie.id === req.params.id){

            return {...req.params.body, id: currentId};
           

        }

        else return movie;

    })
   currentId++;

    res.json(movies);
})


app.get("/movies", (req, res) => {
    res.json(movies)
}
);



app.listen(5000, () => {
    console.log("listening on port 5000!")
});