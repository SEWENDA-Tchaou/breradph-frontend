import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from './HeaderDashboard';
import { useNavigate, useParams } from 'react-router-dom';

function Btp() {
  const [titre, setTitre] = useState("");
  const [conseil1, setConseil1] = useState("");
  const [conseil2, setConseil2] = useState("");
  const [conseil3, setConseil3] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  // route pour afficher nos images qui sont dans la base de donnee
  useEffect(() => {
    getContents();
  }, []);

  const getContents = async() => {
    const response = await axios.get(`https://breradph-bac.vercel.app/conseil/${id}`);
    setTitre(response.data.titre)
    setConseil1(response.data.conseil1);
    setConseil2(response.data.conseil2);
    setConseil3(response.data.conseil3);
  };

  const updateForm = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("conseil1", conseil1);
    formData.append("conseil2", conseil2);
    formData.append("conseil3", conseil3);
    try {
      await axios.put(`https://breradph-bac.vercel.app/conseil/${id}`, formData, {
        headers:{
          "Content-type": "multipart/form-data"
        }
      });
      navigate("/conseil")
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div >
      <HeaderDashboard/>
      <div className='flex  my-4'>
        <div className="bg-bleuClair" >
          <Sidebar/>
        </div>
        <div className="w-[80%] bg-[#85f085] ">
        <h1 className='text-center text-3xl my-2 text-blanc font-bold'>Modifier Conseils</h1>
        <div className=" mb-2 bg-yellow2 mx-12 rounded-xl shadow-xl py-5">
            <div className="">
              <h3 className=' mb-3 text-xl font-bold text-center'>Modifier le contenu de la Session Conseil</h3>
              <form  
              onSubmit={updateForm} 
              >
              <div className="m-3 flex justify-around">
                <label className="w-1/3">Titre :</label>
                <input 
                type="text" 
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={titre}
                onChange={e=>setTitre(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Conseil 1 :</label>
                <input 
                type="text"  
                className=' h-10  w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={conseil1}
                onChange={e=>setConseil1(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Conseil 2 :</label>
                <input 
                type="text"  
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={conseil2}
                onChange={e=>setConseil2(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Conseil 3 :</label>
                <input 
                type="text"  
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={conseil3}
                onChange={e=>setConseil3(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='button border mx-5 justify-end items-end rounded px-10 py-3 text-blanc'
              >
                Update
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Btp;
