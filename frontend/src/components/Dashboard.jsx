import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ContentPages from './ContentPages';
import HeaderDashboard from '../PageDashboard/HeaderDashboard'

function Dashboard() {
  const [auth, setAuth] = useState(false)

  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get("http://localhost:3000")
    .then(res=>{
      if(res.data.Status === "succes"){
        setAuth(true);
      }else{
        setAuth(false);
      }
    })
  }, [])

  return (
    <div className='bg-noir/10'>
    {/* {auth ? */}
      <React.Fragment>
        <div>
          <HeaderDashboard/>
          <section className="flex my-4">
            <div className=" bg-bleuClair">
              <Sidebar/>
            </div>
            <div className="w-[80%] h-[100vh]">
              <ContentPages/>
            </div>
          </section>
        </div>
      </React.Fragment>
          {/* :
          <div className='text-rouge'>veuillez vous connecter!</div> */}
      {/* }  */}
    </div>
  )
}

export default Dashboard;
