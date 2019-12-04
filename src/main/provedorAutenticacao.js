import React from 'react'

import AuthService from '../app/service/authService'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

/**Essa classe sera usada por toda a aplicacao */
class ProvedorAutenticacao extends React.Component{

    state = {
        usuarioAutenticado: null,
        isAutenticado: false
    }

    iniciarSessao = (usuario) => {
        AuthService.logar(usuario);  // seta o usuario no localstorage
        this.setState( {isAutenticado: true, usuarioAutenticado: usuario } )
    } 

    encerrarSessao = () => {
        AuthService.removerUsuarioAutenticado(); // remove usuario do localstorage
        this.setState({ isAutenticado: false, usuarioAutenticado: null})
    }

    render() {
        const contexto = {
            usuarioAutenticado: this.state.usuarioAutenticado,
            isAutenticado: this.state.isAutenticado,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao
        }

        return (
            <AuthProvider value={contexto}>
                {this.props.children}
            </AuthProvider>
        )
    } 
}

export default ProvedorAutenticacao;