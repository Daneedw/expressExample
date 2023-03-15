fetch("http://localhost:5000/movies",
     {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({"title": "Garfield" , "genre": "humor" })
     }
     )
.then(resp =>resp.json())
.then(data =>console.log(data));



fetch("http://localhost:5000/movies")
.then(resp =>resp.json())
.then(data =>console.log(data));
