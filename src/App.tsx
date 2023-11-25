import Profile from "./Profile";
import ListGroup from "./components/ListGroup";
import MainPage from "./components/mainPage";
import SearchGroup from "./components/SearchGroup";
import './App.css';


function App() {
  return (
  <> 
    <div>
      <MainPage/>
    </div>

    <div>
      <SearchGroup/>
    </div>

    <div>
      <ListGroup/>
    </div>
  
  </>
  
  );
}

export default App;
