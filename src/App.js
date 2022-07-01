import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/informations/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
