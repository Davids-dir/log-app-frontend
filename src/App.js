// Importamos las dependencias necesarias
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Importamos los archivos necesarios
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (

    <BrowserRouter>
          <Header />
        <Switch>

          {/* Rutas de las vistas */}
          <Route path='/' component={ Home } exact />
          <Route path='/login' component={ Login } exact />
          <Route path='/register' component={ Register } exact />
          
          
          </Switch>

    </BrowserRouter>
  );
}

export default App;
