import { useState } from "react";
import axios from "axios";
import FormData from 'form-data';
// import { useNavigate } from "react-router-dom";

// import Footer from "../components/Footer"

function Footer () {
    const [email, setEmail] = useState("");

    // const handleSubmit = () =>{
        // axios.post("https://breradph-bac.vercel.app/newsletter", {email, })
        // .then(res => {console.log(res);})
        // .catch(err => console.log(err)); 
        const handleSubmit = ()=>{
       
            let data = new FormData();
            data.append('email', `${email}`);
            
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'https://breradph-bac.vercel.app/newsletter',
            //   headers: { 
            //     ...data.getHeaders()
            //   },
              data : data
            };
            
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
            
                  }

    // } 
    

    return (
        <div>
            <p className="lg:mt-[30px] bg-noir h-0.5"></p>
            <div className="flex  justify-around w-full">
                <div className=" my-3 w-1/2 justify-center items-center">
                    <p className="text-xl text-center">Inscrivez-vous a notre Newsletter</p>
                    <form 
                         className=" flex flex-col justify-center items-center"
                         onSubmit={handleSubmit}
                         >
                        <input 
                        type="email" 
                        className="border border-noir rounded m-3 text-center h-10" 
                        placeholder="ex: abalo@gmail.com"
                        name="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        /> 
                        <button 
                        className="btf bg-[#FFACFF]  px-5 py-3 rounded" 
                        // name="submit"
                        
                        >
                            {"S'INSCRIRE"}
                        </button>
                        
                    </form>
                </div>
                <div className="bg-noir w-0.5 my-1 justify-center items-center"></div>
                <div className="m-auto w-1/2 flex flex-col justify-center items-justify">
                    <strong className="justify-content justify-center ml-[35%]">Retour</strong> <br />
                    <a href="#quiNousSommes" className="text-sm ml-[20%] md:ml-[40%] md:h-4 md:hover:text-lg  "> QUI SOMMES NOUS</a> <br />
                    <a href="#services" className="text-sm ml-[20%] md:ml-[40%] h-4 md:hover:text-lg md:px-4 "> NOS SERVICES</a> <br />
                    <a href="#contact" className="text-sm ml-[20%] md:ml-[40%] h-4 md:hover:text-lg md:px-4 "> CONTACT</a>
                </div>
            </div>
            <div className="bg-bleuClair">
                <p className="text-center py-3">Copyright 2023. Realiser par <a href="" className="text-sm">Knowledge Technology</a></p>
             </div>
    
        </div>
        )}

export default Footer;