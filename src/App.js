import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import"bootstrap/dist/js/bootstrap.bundle.min.js"
import"bootstrap-icons/font/bootstrap-icons.min.css"
import Routing from "./Student/Routing";





function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
