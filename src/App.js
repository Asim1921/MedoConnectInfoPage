import "./App.css";
import UserInfo from "./components/UserInfo";
import NavigationBar from "./components/NavigationBar.js";

function App() {
  return (
    <div className="App">
      <NavigationBar />;
      <UserInfo />
    </div>
  );
}

export default App;
