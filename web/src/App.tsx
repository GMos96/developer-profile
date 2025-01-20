import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {HomePage} from "./home/home-page.tsx";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
