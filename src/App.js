// Importamos las dependencias necesarias
import { BrowserRouter } from 'react-router-dom';


// Importamos los archivos necesarios
import Header from './containers/Header/Header';

function App() {
  return (

    <BrowserRouter>
      <Header /> 
    </BrowserRouter>
  );
}

export default App;
