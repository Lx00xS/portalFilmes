let pesquisar = document.getElementById("container__botao");

pesquisar.addEventListener("click", ()=>{
    let url = `https://api.themoviedb.org/3/search/movie?api_key=133fe43311f2ef6cc18f827ca0ddf4ed&language=pt-BR&query=${document.getElementById("container__input").value}`;
    let request = new XMLHttpRequest();
    
    request.open("GET", url);
    request.send();

    request.addEventListener("readystatechange", ()=>{
        if(request.readyState == 4){
            dadosFilmes = JSON.parse(request.responseText);
            if(dadosFilmes.results.length === 0 ){
                exbirMensagem();
            }
            else{
                montarFilmes(dadosFilmes);
            }
        }
    });
})

function montarFilmes(dados){
    let caixaFilmes = document.querySelector("#principal__filmes");
    let html = " ";
    let filmes = dados.results;

    caixaFilmes.innerHTML = " ";

    filmes.forEach(element => {
        let txt = `<div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="card-img-top" alt="Poster do Filmes">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.overview}</p>
          <a href="detalhes.html?id=${element.id}" class="btn btn-outline-dark">Mais Informações</a>
        </div>
      </div>`

        html = " " + html + " \n" + txt;
        caixaFilmes.innerHTML = html;
    });
}

function exbirMensagem(){
    let caixaFilmes = document.querySelector("#principal__filmes");  
    caixaFilmes.innerHTML = '<h2 class="msg_erro">Nenhum resultado encontrado</h2>';
}