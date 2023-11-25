import Profile from "./Profile";
import ListGroup from "./components/ListGroup";

function App() {
  const publicGroups = ["Study session", "Tennis Club", "Swimming Club"];
  return (
    <div>
      <ListGroup publicGroups={publicGroups} heading="Groups you would like!" />
    </div>
  );
}

export default App;
