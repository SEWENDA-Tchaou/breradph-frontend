import axios from 'axios';
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import HeaderDashboard from '../PageDashboard/HeaderDashboard'
import ReadMoreMessageRecu from '../PageDashboard/ReadMoreMessageRecu'

function All() {

   // affichage des donnes de la table contacts
   const [contactData, setContactData] = useState([])
   useEffect(()=>{
       fetch("http://localhost:3000/afficheContact")
       .then(res =>res.json())
       .then(data =>setContactData(data))
       .catch(err => console.log(err));
   }, )

   //supprimer a partir du bouton delete
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:3000/supContact/"+id)
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
            <h1 className='text-3xl text-center m-7'>{"Voir les Message de ceux qui nous ont contacte"}</h1>
          
          </div>
          {/* Affichage de l'image */}
          <div className=' px-4'>
                <div className="flex bg-orange p-2 mx-1 rounded-md">
                  <strong className='w-1/4'>Objet</strong>
                  <strong className='w-1/4'>Email</strong>
                  <strong className='w-1/4'>Numero de Tel</strong>
                  <strong className='w-1/4'>Message</strong>
                  <strong className='w-1/4'>Action</strong>
                </div>
            {contactData.map((data)=>(
              <div key={data.id} className=''>
                <div className='flex justify-around items-start px-2 my-2  bg-noir/10    '>
                    <p className=' w-1/4 text-[10px] my-3'>{data.objet}</p>
                    <p className=' w-1/3 text-[10px] my-3'>{data.email}</p>
                    <p className='  w-1/6 text-[10px] my-3'>{data.phone}</p>
                    <ReadMoreMessageRecu>
                      <p className='ml-5 '>{data.message}</p>
                    </ReadMoreMessageRecu>
                    <button
                        onClick={() => handleDelete(data.id)}
                        className='w-1/5 hover:bg-rouge hover:text-blanc ml-5 mr-12 my-2 rounded-md text-rouge'
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

export default All;
