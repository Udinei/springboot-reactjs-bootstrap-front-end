import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'

import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { AuthConsumer } from '../main/provedorAutenticacao'


const isUsuarioAutenticado = () =>{
    return true;
}


function RotaAutenticada( { component: Component, isUsuarioAutenticado,...props } ) {
    return (
        <Route {...props} render={ (componentProps) => {

            if(isUsuarioAutenticado){
                return (
                    <Component {...componentProps} />
                )
            }else {
                return (
                    <Redirect to={ { pathname: '/login', state : { from: componentProps.location } } } /> // from - origem da requisicao
                )
            }
        
       }}/>
    ) 
}


function Rotas(props){

    return(
        /** path="/cadastro-lancamentos/:id?" - O ? informa que na url pode ou nao ser passado um parametro
         *  Nota: Para acessar o componente Home precisar estar logado, logo se for direto para raiz(Home)
         *  e nao estiver logado, sera redirecionado para a pagina de login
        */

        <HashRouter>
            
            <Switch>
                <Route exact  path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />

                <RotaAutenticada exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/" component={Home} />    
                <RotaAutenticada exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />  
                <RotaAutenticada exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaAutenticada exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        { (context) => ( <Rotas isUsuarioAutenticado={context.isAutenticado} /> )}
    </AuthConsumer>

) 
//export default Rotas