import React from "react";
import "./styles/main.scss"
import Movies from "./movies"
import Header from "./header";
import Footer from "./footer";
import About,{AppInformation, Author} from "./about";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<h1>Dobrodosli</h1>}></Route>

            <Route path="/about" element={<About />}>
              <Route path="appInformation" element={<AppInformation />}></Route>
              <Route path="author" element={<Author />}></Route>
            </Route>

            <Route path="/movies" element={<Movies/>}></Route>

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;