import { useEffect, useState } from 'react';
import HeaderDashboard from '../PageDashboard/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Commentaires() {
     // affichage des donnes de la table contacts
   const [contactData, setContactData] = useState([])


   useEffect(()=>{
       fetch("http://localhost:3000/afficheCommentaires")
       .then(res =>res.json())
       .then(data =>setContactData(data))
       .catch(err => console.log(err));
   }, )

   //supprimer a partir du bouton delete
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:3000/supCommentaires/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
   }
  return (
    <div >
      <HeaderDashboard/>
      <div className='flex my-4'>
        <div className="w-[20%]  bg-cafe/50">
          <Sidebar/>
        </div>
        <div className="w-[80%] h-full bg-noir/10">
          <div className='border m-5 rounded-lg bg-noir/40'>
            <h1 className='text-3xl text-center m-7'>{"Voir les Commentaires des internautes"}</h1>
          
          </div>
          {/* Affichage de l'image */}
          <div className=' px-4'>
                <div className="flex bg-orange p-2 mx-1 rounded-md">
                  <strong className='w-1/4'>Nom et Prenom</strong>
                  <strong className='w-1/4'>Email</strong>
                  <strong className='w-1/4'>Numero de Tel</strong>
                  <strong className='w-1/4'>Commentaires</strong>
                  <strong className='w-1/4 text-rouge '>Action</strong>
                </div>
         {contactData.map((data)=>(
              <div key={data.id} className=''>
                <div className='flex  px-2 my-2  bg-noir/10    '>
                    <p className=' w-1/4 '>{data.name}</p>
                    <p className=' w-1/4 '>{data.email}</p>
                    <p className='  w-1/4 '>{data.phone}</p>
                    <p className=' w-1/4 '>{data.comment}</p>
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

export default Commentaires;