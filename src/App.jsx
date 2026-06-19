import { UserContext } from "./UserContext";
import Profile from "./Profile";
import Dashboard from "./dashboard";
import "./App.css";

function App() {
  const userData = {
    username: "Deepal",
    role: "Admin",
    email: "deepal@gmail.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="container">
        <h1>User Login Context</h1>
        <Profile />
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}

export default App;