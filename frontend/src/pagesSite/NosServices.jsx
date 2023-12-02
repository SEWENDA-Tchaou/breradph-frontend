// import {useEffect, useState } from "react";
// import "../navbar.css";
import conseils from '../components/ListConseil';
// import ListConseil from '../components/ListConseil'

function Service () {
    // const [data, setData] = useState([])

//   useEffect(()=>{
//     fetch("https://breradph-bac.vercel.app/conseil")
//     .then(res =>res.json())
//     .then(data =>setData(data))
//     .catch(err => console.log(err));
// }, )
// console.log(data)

    return (
        <div className="" >
            <h1 className="text-center text-[35px] uppercase font-bold">Nos services</h1>
            <div className="md:flex md:justify-around ">
                <div className=" md:w-1/2 ">
                    <div className="bg_cendre max-md:hidden  mt-6">
                        <div className="">
                            <div>
                                {/* {data.map((data, i)=>(
                                    <div key={i} className=''>
                                        <div className=" p-2 ">
                                            <strong  className='pl-3   '>{data.titre}</strong> 
                                            <p className='pl-5 my-1  '>{data.conseil1}</p>
                                            <p className='pl-5 my-1  '>{data.conseil2}</p>
                                            <p className='pl-5 my-1  '>{data.conseil3}</p>
                                        </div>                                    
                                    </div>
                                ))} */}
                                 {/* <div className=" p-2 ">
                                            <strong  className='pl-3   '>Nutritions</strong> 
                                            <p className='pl-5 my-1  '>Se laver toujours les mains avant de manger</p>
                                            <p className='pl-5 my-1  '>Ne pas manger les repas trop gras</p>
                                            <p className='pl-5 my-1  '>{"Mangez équilibré, vos repas doivent contenir des proteines..."}</p>
                                            <strong  className='pl-3   '>Les gestes qui sauvent</strong> 
                                            <p className='pl-5 my-1  '>Faire des activités sportives</p>
                                            <p className='pl-5 my-1  '>Ne pas manger les repas trop gras</p>
                                            <p className='pl-5 my-1  '>{"Manquez equilibre, c'est votre repas doit contenir des proteines..."}</p>
                                        </div>   */}
                                        {/* <ListConseil/>                                   */}
                                        {
                                            conseils && conseils.length > 0
                                            ?
                                            conseils.map((item)=>{
                                                return(
                                                    <>
                                                        <p>Titre: {item.titre}</p>
                                                        <p>conseil1 : {item.conseil1}</p>
                                                        <p>conseil2 : {item.conseil2}</p>
                                                        <p>conseil3 : {item.conseil3}</p><br />
                                                    </>
                                                )
                                            })
                                            :
                                            ''
                                        }
                            </div>
                        </div>
                        <div className="bg_jaune ">
                            {/* {data.map((data, i)=>(
                                <div key={i} className=''>
                                    <div className=" p-1.5 ">
                                        <strong>{data.titre}</strong> 
                                        <p className='my- '>{data.conseil1}</p>
                                        <p className='my- '>{data.conseil2}</p>
                                        <p className='my- '>{data.conseil3}</p>
                                    </div> 
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>

                <div className="text md:w-1/2 mr-[5%]">

                    <div  className="card_services hover:border rounded-xl p-2">
                        <h2 className="text-[20px] m-0">Psychosommatique</h2>
                        <p className="bg-yellow h-2 w-[60px]"></p>
                        <p className="text-[20px]">Est une approche médicale et psychologique qui est en interaction entre ...</p>
                    </div> 

                    <div  className="card_services hover:border rounded-xl p-2">
                        <h2 className="text-[20px]">Spiritualité</h2>
                        <p className="bg-yellow h-2 w-[60px]"></p>
                        <p className="text-[20px]">Lorem ipsum is placeholder text commonly used in the </p>
                    </div>

                    <div  className="card_services hover:border rounded-xl p-2">
                    <h2 className="text-[20px]">{"Prise en charge de l'enfance en soufrance"}</h2>
                        <p className="bg-yellow h-2 w-[60px]"></p>
                        <p className="text-[20px]">Écoute empathique, Coordination des services...Nous sommes la pour donner a ces enfants la, et a ces parents...</p>
                    </div>
                    <div  className="card_services hover:border rounded-xl p-2">
                    <h2 className="text-[20px]">{"Formation"}</h2>
                        <p className="bg-yellow h-2 w-[60px]"></p>
                        <p className="text-[20px]">A BRERA/DPH, nous donnons des formations aux individus, aux groupes d'individus des formations...</p>
                    </div>
                </div>
            </div>
            <h1 className="md:hidden text-center text-[35px] uppercase font-bold">Conseils</h1>
            <div className="bg_cendre  p-2 md:hidden ">
                <strong  className='pl-3   '>Nutritions</strong> 
                <p className='pl-5 my-1  '>Se laver toujours les mains avant de manger</p>
                <p className='pl-5 my-1  '>Ne pas manger les repas trop gras</p>
                <p className='pl-5 my-1  '>{"Manquez equilibre, vos repas doivent contenir des proteines..."}</p>
                <strong  className='pl-3   '>Les gestes qui sauvent</strong> 
                <p className='pl-5 my-1  '>Faire des activites sportives</p>
                <p className='pl-5 my-1  '>Ne pas manger les repas trop gras</p>
                <p className='pl-5 my-1  '>{"Manquez equilibre, vos repas doivent contenir des proteines..."}</p>
            </div>                                    
        </div>
    );
}
export default Service;