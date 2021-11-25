let tirar = document.location.search


tirar = tirar.substring(1)


fetch('https://fake-github.herokuapp.com/api/' + tirar)
    .then(function(resultado){
        resultado.json().then(function (data) {
            console.log(`Data:`, data);
        });
}).catch(function(erro){
	console.log(`Erro:`, erro);
});


