let logo = document.querySelector(".logo");

logo.addEventListener("click", ()=>{
    requisicaoMovieDb();
})


window.addEventListener("load", ()=>{
    requisicaoMovieDb();
});

function requisicaoMovieDb(){
    let request = new XMLHttpRequest();

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            montarFilmes(JSON.parse(request.responseText));
        }
}

    request.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=133fe43311f2ef6cc18f827ca0ddf4ed&language=pt-BR");
    request.send();
}

function montarFilmes(dados){
    let caixaFilmes = document.querySelector("#principal__filmes");
    let html = " ";

    caixaFilmes.innerHTML = " ";
    for(let i = 0; i < dados.results.length; i++){
        let filme = dados.results[i];

        let txt = `<div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="Poster do Filmes">
        <div class="card-body">
          <h5 class="card-title">${filme.title}</h5>
          <p class="card-text">${filme.overview}</p>
          <a href="detalhes.html?id=${filme.id}" class="btn btn-outline-dark">Mais Informações</a>
        </div>
      </div>`

       html = " " + html + " \n" + txt;
       caixaFilmes.innerHTML = html;
    }
}