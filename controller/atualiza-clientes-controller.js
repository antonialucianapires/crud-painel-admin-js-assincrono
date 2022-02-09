import { clienteService } from "../service/cliente-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.consultarClientePorId(id)
.then( dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
});
