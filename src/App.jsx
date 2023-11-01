import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Error from "./pages/Error";
import Docs from "./pages/Docs";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<Docs/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  )
}