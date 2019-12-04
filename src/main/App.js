import React from 'react'

import Rotas from './rotas'
import NavBar from '../components/navbar'
import ProvedorAutenticacao from '../main/provedorAutenticacao'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


/** Criando componente em forma de classe */
class App extends React.Component{
   render(){
    return (
      
      <ProvedorAutenticacao>
          <NavBar />
          
          <div className="container">
            <Rotas />
          </div>

      </ProvedorAutenticacao>
      
    )  
  }
}

/**Criando  componente Reactjs em forma de funcao
function App() {
  return (
    <div>
      hello world!
   
    </div>
  );
}
 */
export default App;
