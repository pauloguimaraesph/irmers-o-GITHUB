function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa"
    // Essa seção será usada para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");
  
    // Loga a seção no console para fins de depuração
    console.log(section);
  
    // Itera sobre cada dado na lista de dados (não mostrado no código)
    for (let dado of dados) {
      // Adiciona um novo elemento HTML à seção de resultados
      // A cada iteração, um novo item de resultado é criado
      section.innerHTML +=
        `<div class="item-resultado">
           prayboy <P>
             O mais importante é a diversão e a alegria de jogar.
           </P>
           <a href="https://www.leagueoflegends.com/pt-br/" target="_blank">site oficial</a>
         </div>`;
    }
  }