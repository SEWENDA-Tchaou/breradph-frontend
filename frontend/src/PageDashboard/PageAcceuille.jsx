import HeaderDashboard from './HeaderDashboard';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Hotel() {
  const [pub, setPub] = useState("")
  const [contenuSite, setContenuSite] = useState([])
  // const Navigate = useNavigate("")
  useEffect(()=>{
      fetch("http://localhost:3000/pub")
      .then(res =>res.json())
      .then(data =>setContenuSite(data))
      .catch(err => console.log(err));
  }, )

  const handleSubmit = ()=>{
    // event.preventDefault("");
    axios.post("http://localhost:3000/pub", {pub, })
    .then(res => {console.log(res);
      // Navigate("/Pageacceuille");
    })
    .catch(err => console.log(err)); 
  } 

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:3000/pub/"+id)
      // window.location.reload()
    }catch(err){
      console.log(err)
    }
   }

  return (
    <div >
      <HeaderDashboard/>
      <div className='flex  my-4'>
        <div className="bg-bleuClair" >
          <Sidebar/>
        </div>
        <div className="w-[80%] bg-[#85f085]">
        <div className=" mb-2 bg-yellow2 m-12 rounded-xl shadow-xl py-5">
            <div className="">
              <h3 className=' mb-3 text-xl font-bold text-center'>{"Ajouter de la PUB a la Page d'acceuille"}</h3>
              <form  
              onSubmit={handleSubmit} 
              >
              <div className="m-3 flex justify-around">
                <input 
                  type="text" 
                  className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                  value={pub}
                  onChange={e=>setPub(e.target.value)}
                />
              </div>
              
              <button 
                type='submit'
                className='button border m-5 justify-end items-end rounded px-10 py-3 text-blanc'
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
          {/* Affichage de l'image */}
          <div className='flex  px-4'>
            {contenuSite.map((data)=>(
              <div key={data.id} className='m-1'>
                  <div className='w-full  bg-noir/10 justify-around items-center  '>
                      <p className=' my-1 text-center'>{data.pub}</p>
                      <div className='flex justify-around items-center space-x-1 py-1'>
                        <a href={`updateHotel/${data.id}`} className='text-bleue hover:text-blanc hover:bg-bleue px-2 rounded-md'>Edit</a>
                        <button onClick={()=>handleDelete(data.id)}  className='hover:bg-rouge hover:text-blanc px-2 rounded-md text-rouge'>Delete</button>
                      </div>
                  </div>
              </div>
          ))}
          </div>
        </div>
      </div >
    </div>
  )
}

export default Hotel;
