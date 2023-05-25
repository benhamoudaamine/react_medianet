import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import Update from "./pages/dashboard/EditUser"; 
//Route API 

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard/EditUser/:id" Component={Update} />
         {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
