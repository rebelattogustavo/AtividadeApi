const java = document.querySelector('body');


let valoresArr = [];


let button = document.createElement('button');
button.className = 'button';
button.innerText = 'Cadastro';

let container = document.createElement('div');
container.className = 'container';


container.appendChild(button);

java.appendChild(container);

let inputFiltro = document.createElement('input');
inputFiltro.type = 'text';
inputFiltro.className = 'input-filtro'
java.appendChild(inputFiltro)


button.addEventListener('click', function(){
    //Criando a div do modal
    let containerModal = document.createElement('div');
    containerModal.className = 'container-modal';

    //Criando o modal
    let modal = document.createElement('div');
    modal.className = 'div-modal'
    
    //Add o modal na div
    containerModal.appendChild(modal);

    //Add a div no body
    java.appendChild(containerModal);

    java.style.backgroundColor = 'grey';
    button.style.backgroundColor = 'grey';


    let titulo = document.createElement('h2');
    titulo.innerText = 'CADASTRÃO';
    titulo.className = 'titulo-modal';


    modal.appendChild(titulo);


    let divNome = document.createElement('div');
    divNome.className = 'div-nome';
    

    let nomeInput = document.createElement('input');
    nomeInput.className = 'input-nome';
    nomeInput.placeholder = 'Nome';;
    

    divNome.appendChild(nomeInput);
    modal.appendChild(divNome);


    let divSobrenome = document.createElement('div');
    divSobrenome.className = 'div-nome';
    
    let login = document.createElement('input');
    login.className = 'input-sobrenome';
    login.placeholder = 'Login';
    
    divSobrenome.appendChild(login);
    modal.appendChild(divSobrenome);


    let divBoToesInferior = document.createElement('div');
    divBoToesInferior.className = 'div-botoes-inferior';


    let enviar = document.createElement('button');
    enviar.className = 'botao-enviar';
    enviar.innerText = 'Cadastrar';

    modal.appendChild(enviar)

    divBoToesInferior.appendChild(enviar);

    let cancelar = document.createElement('button');
    cancelar.className = 'botao-cancelar';
    cancelar.innerText = 'Cancelar';
    
    divBoToesInferior.appendChild(cancelar);

    
    enviar.onclick = function(){
        if(nomeInput.value == '' || login.value == ''){
            const divVermelha =  document.createElement('div');
            divVermelha.className = 'father-vermelha';


            const vermelha = document.createElement('div');
            vermelha.className = 'div-vermelha'
            vermelha.innerHTML = '<p>HÁ ALGUM CAMPO VAZIO</p>';
            vermelha.style.position = 'absolute';
            vermelha.style.bottom = 0;

            divVermelha.appendChild(vermelha);

            java.appendChild(divVermelha);

            let intervaloV = setTimeout(function(){
                vermelha.remove()
                
            },3000)
        }
        
        else if(nomeInput.value != '' && login.value != ''){
            
            let tabela = document.createElement('table')
            tabela.className = 'tabela'
            
            java.appendChild(tabela)
            
            const divVerde = document.createElement('div');
            divVerde.className = 'father-verde';
            
            const verde = document.createElement('div');
            verde.className = 'div-verde';
            verde.innerHTML = '<p>CADASTRO CONCLUÍDO</p>';
            verde.style.position = 'absolute';
            verde.style.bottom = 0;
            
            divVerde.appendChild(verde);

            java.appendChild(divVerde);
            
            let intervalo = setTimeout(function(){
                containerModal.remove();
                
                java.style.backgroundColor = 'transparent';
                button.style.background = '#EFEFEF';
                button.style.outline = 'none';
            },1)

            let intervaloV2 = setTimeout(function(){
                verde.remove()
                
            },5000)

            
            let nome = document.querySelector('.input-nome')


            let login = document.querySelector('.input-sobrenome')
    


            
            usersList.push({name: nome.value, userName: login.value})
            criarLista();

        }
        
        
        
    }
    
    cancelar.onclick = function(){
        containerModal.remove();
        java.style.backgroundColor = 'transparent';
        button.style.background = '#EFEFEF';
        button.style.outline = 'none';

    }
    
    modal.appendChild(divBoToesInferior)
    
})

const usersList = [
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meireles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' }
]

console.log(usersList);


function criarLista(){
    const listaAtual = document.querySelector('.div-lista');
    if(listaAtual){
        listaAtual.remove()
    }

    let divLista = document.createElement('div');
    divLista.className = 'div-lista';

    let criarListaUsers = document.createElement('ol')
    criarListaUsers.className = 'criar-lista'

    divLista.appendChild(criarListaUsers)

    
    
    usersList.forEach(e => {
        let criarItem = document.createElement('li')
        criarItem.className = 'criar-item';
        
        let a = document.createElement('a')
        a.href = `./UserPage/userpage.html?${e.userName}`;

        let criarBotao = document.createElement('button')
        criarBotao.innerText = 'Visualizar'

        a.appendChild(criarBotao)

        criarItem.innerText = e.name + ' --> ' + 'username: ' + e.userName;
        criarListaUsers.appendChild(criarItem);
        criarListaUsers.appendChild(a);
    });
    document.body.appendChild(criarListaUsers)
}

    criarLista();


    let input, filter, ol, li, i, txtValue;
    input = document.querySelector('input');
    filter = input.value.toUpperCase();
    ol = document.querySelector('ol');
    li = li.querySelector('li');

inputFiltro.addEventListener('keyup',function(){
      
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      
})
