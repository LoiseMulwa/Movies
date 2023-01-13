const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "e4979fefb9msh4fadf7b2d462826p1ce4d0jsn5af0c91c8b38",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
};

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", options)
    .then((response) => response.json())
    .then((data) => {
        const list = data.d;
        list.map((item) => {
            // console.log(item)
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
            document.querySelector(".movies").innerHTML += movie;
        });
    })
    // console.log(data))
    .then((response) => console.log(response))
    .catch((err) => console.error(err));