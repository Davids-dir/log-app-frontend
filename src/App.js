// Importamos las dependencias necesarias
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Importamos los archivos necesarios
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';

function App() {
  return (

    <BrowserRouter>
          <Header />
        <Switch>

          {/* Rutas de las vistas */}
          <Route path='/' component={ Home } exact />
          
          </Switch>

    </BrowserRouter>
  );
}

export default App;
