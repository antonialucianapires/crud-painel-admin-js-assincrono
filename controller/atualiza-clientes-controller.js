import { clienteService } from "../service/cliente-service.js";
(async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    try {
        const cliente = await clienteService.consultarClientePorId(id)
        inputNome.value = cliente.nome
        inputEmail.value = cliente.email
    } catch (erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }


    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (evento) => {

        evento.preventDefault();

        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = '../telas/edicao_concluida.html'
        } catch (erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }

    })
})
    ()
