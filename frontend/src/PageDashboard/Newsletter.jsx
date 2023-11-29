import axios from 'axios';
import HeaderDashboard from '../PageDashboard/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';

function Newsletter() {
      // affichage des donnes de la table contacts
   const [contactData, setContactData] = useState([])


   useEffect(()=>{
       fetch("http://localhost:3000/newsletter")
       .then(res =>res.json())
       .then(data =>setContactData(data))
       .catch(err => console.log(err));
   }, )

   //supprimer a partir du bouton delete
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:3000/newsletter/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
   }
  return (
    <div >
      <HeaderDashboard/>
      <div className='flex my-4'>
        <div className=" bg-bleuClair">
          <Sidebar/>
        </div>
        <div className="w-[80%] bg-[#85f085]">
          <h1 className='text-center font-bold text-blanc text-3xl my-2'>Newslstter</h1>
          <div className='border m-5 rounded-lg bg-noir/40'>
            <h1 className='text-3xl text-center m-7'>{"Voir les abonnes du Site"}</h1>
          
          </div>
          {/* Affichage de l'image */}
          <div className=' px-4'>
      
           {contactData.map((data)=>(
              <div key={data.id} className=''>
                <div className='flex justify-around items-center px-2 my-2  bg-noir/10    '>
                    <p className=' w-1/4 '>{data.id}</p>
                    <p className=' w-1/4 '>{data.email}</p>
                    <button
                        onClick={() => handleDelete(data.id)}
                        className='hover:bg-rouge hover:text-blanc px-2 rounded-md text-rouge'
                      >
                        Delete
                      </button>
                    <div className='flex justify-around items-center space-x-1 py-1'>
                     
                    </div>
                </div>
            </div>
          ))} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;