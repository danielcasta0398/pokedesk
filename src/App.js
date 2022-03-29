import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import PokemonCharacters from './Components/PokemonCharacters';
import PokemonDescription from './Components/PokemonDescription';
import ProtecteRoutes from './Components/ProtecteRoutes';



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route  path='/' element={ <Login /> } />

          <Route element={<ProtecteRoutes />}>
            <Route path='/characters' element={ <PokemonCharacters /> } />
            <Route path='/description/:id' element= { <PokemonDescription /> } />
          </Route>    
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
