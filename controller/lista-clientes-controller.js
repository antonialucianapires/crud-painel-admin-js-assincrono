import { clienteService } from "../service/cliente-service.js";

const criarNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `

    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td> 
    `

    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela');

tabela.addEventListener('click', (evento) => {
    let isBotaoDeletar  = evento.target.className === 'botao-simples botao-simples--excluir';

    if(isBotaoDeletar) {
        //método closest para encontrar o elemento do DOM mais próximo ao que queremos remover
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;

        clienteService.removeCliente(id)
        .then(() => {
            //Remover um elemento do dom com método remove()
            linhaCliente.remove()
        });
    }

})

clienteService.listaClientes()
    .then(data => {
        console.log(data)
        data.forEach(cliente => {
            tabela.appendChild(criarNovaLinha(cliente.nome, cliente.email, cliente.id));
        })

    });

