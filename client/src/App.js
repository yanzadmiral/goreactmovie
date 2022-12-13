/**
 * third party
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * internal source
 */
import Menu from "./components/Menu";
import MoviesDetail from "./pages/Movies/Show";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Genres from "./pages/Genres";
import Admin from "./pages/Admin";

/**
 * style
 */
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">go react movie project</h1>
          <hr className="mt-3" />
        </div>
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route exact path='/movies/:id' element={<MoviesDetail />}/>
              <Route path='/movies' element={<Movies />}/>
              <Route path='/genres' element={<Genres />}/>
              <Route path='/admin' element={<Admin />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
