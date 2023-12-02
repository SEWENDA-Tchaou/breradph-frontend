// import { useEffect, useState } from "react";
import email from "/assets/img/email.png"
import icon_call_ from "/assets/img/icon_call_.png"
import Vector4 from "/assets/img/Vector4.png"
import Vector5 from "/assets/img/Vector5.png"

function Contact () {

//     const [data, setData] = useState([])

//     useEffect(()=>{
//       fetch("https://breradph-bac.vercel.app/conseil")
//       .then(res =>res.json())
//       .then(data =>setData(data))
//       .catch(err => console.log(err));
//   }, )

    


    return (
        <div className="NousContactez " >
            <h1 className="text-center text-[35px] my-[30px] font-bold">CONTACTEZ NOUS</h1>

            <div className="container_service mt-[50px] grid grid-cols-1 lg:grid-cols-2 m-5 ">
            <div className="max-lg:hidden">
            <div className="bg_cendre  ">
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
                                <strong  className='pl-3   '>Nutritions</strong> 
                                            <p className='pl-5 my-1  '>Se laver toujours les mains avant de manger</p>
                                            <p className='pl-5 my-1  '>Ne pas manger les repas trop gras</p>
                                            <p className='pl-5 my-1  '>{"Manquez equilibre, c'est votre repas doit contenir des proteines..."}</p>
                                            <strong  className='pl-3   '>Les gestes qui sauvent</strong> 
                                            <p className='pl-5 my-1  '>Faire des activites sportives</p>
                                            <p className='pl-5 my-1  '>Ne pas manger les repas trop gras</p>
                                            <p className='pl-5 my-1  '>{"Manquez equilibre, c'est votre repas doit contenir des proteines..."}</p>
                            </div>
                        </div>
                        <div className="bg_jaune">
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
            <div className="text bg-indigo-300">
                   <div className=" bg-white">
                    <img src={Vector4} className="max-lg:hidden" alt="" />
                   </div>
                   <div className="max-sm:text-[20px] bg-[#C9FFFF] text-3xl text-center w-full ">
                            <h3 className="p-4">Nous sommes situé a  LOMÉ, Amadahome non loin du CAP Amadahome</h3>
                            <p className="px-4">Et joingnable :</p>
                            <div className="flex justify-around items-center">
                            <div className="px-1 lg:px-4  "> 
                                 <p className="text-sm">Pour informations</p>
                                    <div className="flex my-3">
                                        <img src={ icon_call_} alt="" className="max-md:w-[20px] w-[50px]" />
                                        <p className="px-5 text-sm">
                                        <span>+ 228 90 97 41 62</span> <br />
                                            <span>+ 228 90 72 75 60</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="max-md:hidden bg-noir w-1 h-10"></p>
                                <div>
                                <p className="text-sm">Suivit médical</p>
                                    <div className="flex my-3">
                                        <img src={ icon_call_} alt="" className="max-md:w-[20px] w-[50px]"  />
                                        <p className="px-2 lg:px-5 text-sm">
                                        <span>+ 228 90 97 41 62</span> <br />
                                            <span>+ 228 90 72 75 60</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="p-4 flex">
                                <img src={ email} alt="" width="50" />
                                <span className="px-5 ">dphbrera@gmail.com</span>
                            </p>

                   </div>
                   <div className=" bg-white">
                    <img src={Vector5} className="max-lg:hidden w-full" alt="" />
                   </div>
                   
            </div>
        </div>
    </div> 
    )}
    
export default Contact;