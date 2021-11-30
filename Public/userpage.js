let tirar = document.location.search


tirar = tirar.substring(1)


fetch('https://fake-github.herokuapp.com/api/search/' + tirar)
    .then(function(resultado){
        resultado.json().then(function (data) {
            console.log(`Data:`, data);

            const imagemPfp = document.createElement('img')
            imagemPfp.src = data.avatar_url
            document.body.appendChild(imagemPfp)

            let nomeUsuario = document.createElement('h1')
            nomeUsuario.innerText = data.name
            document.body.appendChild(nomeUsuario)

            let username = document.createElement('h3')
            username.innerText = data.login
            document.body.appendChild(username)
        });
    }).catch(function(erro){
        console.log(`Erro:`, erro);
    });

fetch('https://fake-github.herokuapp.com/api/search/' + tirar + '/repos')
    .then(function(resultado2){
        resultado2.json().then(function (repos) {
            console.log(`Data2:`, repos);


            repos.forEach(e => {
                let listaRepos = document.createElement('ol')
            
                let nomeRepos = document.createElement('li')
                    nomeRepos.innerText = e.name
                    listaRepos.appendChild(nomeRepos)
            
                    let linkRepos = document.createElement('a')
                    linkRepos.href = e.clone_url

                    
                    let mostrarLinks = document.createElement('button')
                    mostrarLinks.innerText = 'Ver repositório'
                    linkRepos.appendChild(mostrarLinks)
                
                    document.body.appendChild(listaRepos)
                    document.body.appendChild(linkRepos)
        });
    }).catch(function(erro2){
        console.log(`Erro:`, erro2);
    });
    


        
    })
