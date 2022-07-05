import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const admin = useSelector((state) => state.admin);
  if (!admin.admin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
