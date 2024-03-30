import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Detail from "./components/Detail/Detail";
import FormVideogame from "./components/FormVideogame/FormVideogame";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { getDataBD, getGenres, getVideogame } from "./redux/actions";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { useDispatch } from "react-redux";
import About from "./components/About/About";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogame());
    dispatch(getDataBD());
    dispatch(getGenres());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Nav />
              <Detail />
            </>
          }
        />
        <Route
          path="/formvideogame"
          element={
            <>
              <Nav />
              <FormVideogame />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Nav />
              <About />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
