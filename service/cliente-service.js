const listaClientes = () => {

    return fetch(`http://localhost:3001/profile`)
        .then(resposta => {
            return resposta.json()
        })
}

export const clienteService = {
    listaClientes
}