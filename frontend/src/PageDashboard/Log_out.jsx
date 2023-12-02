import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Log_out() {
  const [name, setName] = useState("");

  const handleLogout = () => {
    axios.get("https://breradph-bac.vercel.app/logout")
    .then(res => {
      if(res.data.Status === "succes") {
        location.reload(true);
      } else {
        alert("erreur");
      }
    })
    .catch(err => {
      console.log(err)
    })
  };

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3000")
    .then(res => {
      if(res.data.Status === "succes"){
        setName(res.data.name);
      }
    })
  }, []);

  return (
    <div className='flex space-x-5 h-12 justify-center items-center'>
      <h3 className='admin'>
        Vous êtes connecter <strong>{name}</strong>
      </h3>
      <Link
        to='/'
        className="text-red-700 pr-10"
        onClick={handleLogout}
      >
        Logout
      </Link>
    </div>
  )
}

export default Log_out;
