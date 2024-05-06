document.addEventListener('DOMContentLoaded', function () {
    const listaAnimais = document.getElementById('lista-animais');
    const cadastrarAnimalBtn = document.getElementById('cadastrar-animal');


    function exibirAnimais() {
        fetch('https://66382d704253a866a24cf765.mockapi.io/animal')
            .then(response => response.json())
            .then(data => {
                listaAnimais.innerHTML = ''; // Limpar a lista antes de adicionar os novos animais
                data.forEach(animal => {
                    const itemLista = document.createElement('li');
                    itemLista.textContent = `${animal.id} - ${animal.nome} (${animal.idade} anos) - ${animal.raca}`;
                    listaAnimais.appendChild(itemLista);
                });
            })
            .catch(error => console.error('Erro:', error));
    }


    function cadastrarAnimal() {
        const novoAnimal = {
            nome: 'Bob',
            idade: 7,
            raca: 'dog'

        };

        fetch('https://66382d704253a866a24cf765.mockapi.io/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoAnimal)
        })
            .then(response => response.json())
            .then(data => {

                exibirAnimais();
            })
            .catch(error => console.error('Erro:', error));
    }


    cadastrarAnimalBtn.addEventListener('click', function () {
        cadastrarAnimal();
    });


    exibirAnimais();
});
