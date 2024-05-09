const params = new URLSearchParams(location.search);

let id = params.get("id");
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=133fe43311f2ef6cc18f827ca0ddf4ed&language=pt-BR`;
let request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onreadystatechange = ()=>{
    if(request.readyState == 4){
        exibirDetalhes(JSON.parse(request.responseText));
    }
}

function exibirDetalhes(dados){
    let caixaDetalhes = document.querySelector(".principal__detalhes");
    caixaDetalhes.innerHTML = `<h1 class="principal__titulo">${dados.title}</h1>

    <div class="container__imagem">
        <img src="https://image.tmdb.org/t/p/w500${dados.poster_path}" alt="Poster do filme" class="poster">
    </div>
    
    <div class="filme__resumo">
        <p>${dados.overview}</p>
    </div>

    <div class="filmes__txt">
        <p><span class="filme__info">Data de lançamento:</span>${dados.release_date}</p>
        <p><span class="filme__info">Duração:</span>${dados.runtime}</p>
        <p><span class="filme__info">Lingua original:</span>${dados.original_language}</p>
    </div>`
}