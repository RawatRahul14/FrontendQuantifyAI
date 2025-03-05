import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

export default function ProtectedRoute() {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BarLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Authentication error: {error.message}</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />; // This renders nested child routes
}


