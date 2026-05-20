import { useAuth } from "../store/authStore";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {

  const loading = useAuth((state) => state.loading);
  const currentUser = useAuth((state) => state.currentUser);

  // loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // not logged in
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // role check
  if (
    allowedRoles &&
    !allowedRoles.includes(currentUser.role)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;