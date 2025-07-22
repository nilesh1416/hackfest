import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/teams')
      .then(res => setTeams(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Teams</h2>
      <ul>
        {teams.map(team => (
          <li key={team._id}>{team.name} - {team.branch}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
