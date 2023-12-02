import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from './HeaderDashboard';
import { useNavigate, useParams } from 'react-router-dom';

function ActualiteUpdate() {
    const [texte, setTexte] = useState("");
    const [theme1, setTheme] = useState("");
    const [lireTout1, setLireTout] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();


  // route pour afficher nos images qui sont dans la base de donnee
  useEffect(() => {
    getContents();
  }, []);

  const getContents = async() => {
    const response = await axios.get(`https://breradph-bac.vercel.app/actu/${id}`);
    setTexte(response.data.titre);
    setTheme(response.data.theme);
    setLireTout(response.data.themeTout);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateForm = async(e) => {
    e.preventDefault();
    const formData = new FormData();
        formData.append("file", file);
        formData.append("texte", texte);
        formData.append("theme1", theme1);
        formData.append("lireTout1", lireTout1);
    try {
      await axios.put(`https://breradph-bac.vercel.app/actu/${id}`, formData, {
        headers:{
          "Content-type": "multipart/form-data"
        }
      });
      navigate("/actualite")
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
          <h1 className='text-center text-3xl my-2 text-blanc font-bold'>Actualites</h1>
          <div className="  bg-yellow2 mx-12 mb-2 rounded-xl shadow-xl py-5">
            <div className="">
              <h3 className=' mb-3 text-xl font-bold text-center'>Publier votre actualite ici</h3>
              <form  
              onSubmit={updateForm} 
              >
              <div className="m-3 flex justify-around">
                <label className="w-1/3">Titre de la publication :</label>
                <input 
                type="text" 
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={texte}
                onChange={e=>setTexte(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Theme :</label>
                <input 
                type="text"  
                className=' h-10  w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={theme1}
                onChange={e=>setTheme(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>lire la suite :</label>
                <input 
                type="text"  
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={lireTout1}
                onChange={e=>setLireTout(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Ajouter une image:</label>
                <input 
                type="file"  
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                onChange={loadImage}
                />
              </div>
              <button 
                type='submit'
                className='button border mx-5 justify-end items-end rounded px-10 py-3 text-blanc'>
                  Update
              </button>
            </form>
             {/* Apercu de l'image */}
            {preview ? (
              <img src={preview} alt="" width={100} height={100}  />
              ) : (
                ""
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ActualiteUpdate;
