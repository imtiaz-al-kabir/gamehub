import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  console.log(user);
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
