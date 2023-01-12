import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeCard from "./components/HomeCard";
import Home from "./routes/Home";
import SearchPerfil from "./routes/Home/SearchPerfil";
import Info from "./routes/Home/SearchPerfil/Info";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeCard />} />
          <Route path="search" element={<SearchPerfil />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
