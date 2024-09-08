// Esta função é chamada quando o usuário realiza uma pesquisa e renderiza os resultados na página.
function pesquisar() {
  
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se campoPesquisa for uma string vazia
    if(campoPesquisa == "" ) {
        section.innerHTML = "Nada foi encontrado, digite o nome de um(a) atleta"
        return
    }
  
    // Inicializa uma string vazia para construir o HTML dos resultados.
    let resultadoDaSection = "";
    let img = "";
    let nome = "";
    let dataNascimento = "";
    let genero = "";
    let estadoCivil = "";
    let ocupacao = "";
    let nacionalidade = ""; 
    let partido = ""; 
    let numero = ""; 
    let instagram = "";  
       
  
    // Itera sobre cada objeto 'dado' no array 'dados', que representa um resultado da pesquisa.
    for (let dado of dados) {
        img = dado.img;
        nome = dado.nome;
        dataNascimento = dado.dataNascimento;
        genero = dado.genero
        estadoCivil = dado.estadoCivil
        ocupacao = dado.ocupacao;
        nacionalidade = dado.nacionalidade
        partido = dado.partido
        instagram = dado.instagram;

        // Se titulo includes campoPesquisa
        if(nome.includes(campoPesquisa) || genero.includes(campoPesquisa) || estadoCivil.includes(campoPesquisa) || nacionalidade.includes(campoPesquisa) || partido.includes(campoPesquisa) || numero.includes(campoPesquisa)){
            // Cria um novo elemento 
            resultadoDaSection += `
            <div class="content-img">
                <img src="${dado.img}" alt="">
            </div>
            <div class="content-descricao">
                <h2>${dado.nome}<h2>
                <p>${dado.dataNascimento}</p>
                <p>${dado.genero}</p>
                <p>${dado.estadoCivil}</p>
                <p>${dado.ocupacao}</p>
                <p>${dado.corRaca}</p>
                <p>${dado.nacionalidade}</p>
                <p>${dado.partido}</p>
                <p>${dado.numero}</p>
                <p><a href="${dado.instagram}" target="_blank">Instagram</a></p>
            </div>


            `;
        }
    }
  
    if(!resultadoDaSection){
        resultadoDaSection =  "Nada foi encontrado!"
    }

    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa.
    section.innerHTML = resultadoDaSection;
}


