// import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function HeaderAccueil() {
    // const [contenuSite, setContenuSite] = useState([])
//    const [contactData, setContactData] = useState([])

  // const Navigate = useNavigate("")
//   useEffect(()=>{
//       fetch("http://localhost:3000/pub")
//       .then(res =>res.json())
//       .then(data =>setContenuSite(data))
//       .catch(err => console.log(err));
//   }, [])

// useEffect(()=>{
//     fetch("http://localhost:3000/pub")
//     .then(res =>res.json())
//     .then(data =>setContactData(data))
//     .catch(err => console.log(err));
// }, [])

  return (
    <header className="relative">
        <div
            className="absolute h-full w-full colorBgAcceuil z-20 top-0 left-0 "
        >
            <Navbar />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="first-texte text-[15px] mt-16 md:text-[25px] md:mt-2 lg:mt-28 md:text-4xl  text-center sm:text-left text-blanc/95 font-bold md:mx-20">
                 Avec BRERA/DPH, finies les difficultés psychosociales
                </h1> <br />
                <h1 className="second-texte text-sm md:text-[25px]  text-center sm:text-left text-blanc/95 font-bold mx-20"> BRERA/DPH, c’est l’ÉCOLE DE VIE</h1>
               {/* {contactData.map((data)=>(
                    <div key={data.id} className=''>
                        <div className='w-full  bg-noir/10 justify-around items-center  '>
                            <p className=' text-center font-bold'>{data.pub}</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
        <div
         id='quiNousSommes'
            className="block z-10 top-0 left-0 w-full bg-cover bg-center bg-no-repeat h-[60vh] bg-[url('/assets/img/docteur1.png')]"
            // style={{ backgroundImage: `url(../src/assets/img/${imageName})` }}
        >
        </div>
    </header>
  )
}

export default HeaderAccueil;
