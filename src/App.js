import React from 'react';

import Login from './views/login';

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

/** Criando componente em forma de classe */
class App extends React.Component{
   render(){
    return (
      <div>
        <Login />
      </div>
    );  
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
