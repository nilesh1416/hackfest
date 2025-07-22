import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token, session, etc.
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
