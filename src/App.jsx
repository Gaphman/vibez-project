import "./App.css";
import MusicCard from "./components/MusicCard/MusicCard";
import Sidebar from "./components/NavBar/SideBar/Sidebar";
import MenuBar from "./components/NavBar/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      
      <MenuBar />
      <Sidebar />
      <MusicCard /> 
    </div>
  );
}

export default App;
