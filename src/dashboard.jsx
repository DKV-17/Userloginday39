import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return (
    <div className="card">
      <h2>Dashboard Component</h2>
      <p>Welcome, {user.username}</p>
      <p>Your Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;