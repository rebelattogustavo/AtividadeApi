

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



