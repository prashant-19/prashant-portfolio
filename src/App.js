import React from "react";
import Layout from './component/Layout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Landingpage} from "./component/landingpage/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Landingpage/>}/>

        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
