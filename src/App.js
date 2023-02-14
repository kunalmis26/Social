
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import "./components/navbar.css"
import "./components/rightbar.css"
import Rightbar from "./components/rightbar"
import Post from './components/feed-post ';


function App() {
  return (
    <div className="App">
     <NavbarComp/>
     <div style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center",padding:"5px"
                }}><Post/>

            </div>
    
     <Rightbar/>
    </div>
  );
}

export default App;
