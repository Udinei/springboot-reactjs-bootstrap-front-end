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
        /** path="/cadastro-lancamentos/:id?" - O ? informa que na url pode ou nao ser passado um parametro*/
        <HashRouter>
            
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                 
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
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