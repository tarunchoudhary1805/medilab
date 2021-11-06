import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "./Routes/PrimaryRoutes";
import "./Shared/css/style.css";
import Footer from "./Shared/components/Footer";
import Header from "./Shared/components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
       
        <PrimaryRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
