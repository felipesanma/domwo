
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from "./pages/Error";
import Home from "./pages/home/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home wgType={"home"} />} />
      </Route>
      <Route path="/liquidaciones">
        <Route index element={<Home wgType={"paymentdoc"} />} />
      </Route>
      <Route path="/perfil">
        <Route index element={<Home wgType={"user"} />} />
      </Route>
      <Route path="*">
        <Route index element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);



export default App;
