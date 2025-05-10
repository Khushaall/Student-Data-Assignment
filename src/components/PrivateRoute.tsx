import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="h-screen w-screen justify-center items-center text-2xl ">Loading...</div>;

  return user ? children : <Navigate to="/" />;
}
