import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from './HeaderDashboard';

function Actualite() {
  const [texte, setTexte] = useState("");
    const [theme1, setTheme] = useState("");
    const [lireTout1, setLireTout] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const [contenuSite, setContenuSite] = useState(['']);

  // route pour afficher nos images qui sont dans la base de donnee
  useEffect(() => {
    getContents();
  }, []);

  const getContents = async() => {
    const response = await axios.get("http://localhost:3000/actu");
    console.log(response.data)
    setContenuSite(response.data);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveForm = async() => {
    // e.preventDefault();
    const formData = new FormData();
        formData.append("file", file);
        formData.append("texte", texte);
        formData.append("theme1", theme1);
        formData.append("lireTout1", lireTout1);
    try {
      await axios.post("http://localhost:3000/actu", formData, {
        headers:{
          "Content-type": "multipart/form-data"
        }
      });
      // navigate("/")
    } catch(error) {
      console.log(error);
    }
  };

  // suppression du contenu
  const deleteContent = async(contentId) => {
    try {
      await axios.delete(`http://localhost:3000/actu/${contentId}`);
      getContents();
    }catch(error){
      console.log(error);
    }
    console.log('sup....')
  };

  console.log(contenuSite);

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
              onSubmit={saveForm} 
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
                  Envoyer
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
          {/* Affichage de l'image */}
          <div className='flex  px-4'>
           {contenuSite.map((data)=>(
              <div key={data.id} className='m-1'>
                  <div className='w-full  bg-noir/10 justify-around items-center  '>
                      <figure className="image ">
                      <img src={data.url} className='h-[100px] w-full' alt="Image" />
                      </figure>
                      <p className=' my-1 text-center'>{data.titre}</p>
                      <div className='flex justify-around items-center space-x-1 py-1'>
                        <a
                          href={`updateActu/${data.id}`}
                          className='text-bleue hover:text-blanc hover:bg-bleue px-2 rounded-md'
                        >
                          Edit
                        </a>
                        <button
                          onClick={() => deleteContent(data.id)}
                          className='hover:bg-rouge hover:text-blanc px-2 rounded-md text-rouge'
                        >
                          Delete
                        </button>
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

export default Actualite;
