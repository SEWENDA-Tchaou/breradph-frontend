import {  useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LireSuite from '../components/LireSuite';


function Actualite() {
    const [slidesPerView, setSlidesPerView] = useState(4)
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    
    // const [selectedData, setSelectedData] = useState(null);

    // const [showModal, setShowModal] = useState(false)
    // const handleOnClose = ()=> setShowModal(false)

    useEffect( () => {
        if (isMobile) {
            setSlidesPerView(1)
        } else if (isMedium) {
            setSlidesPerView(2)
        } else {
            setSlidesPerView(3)

        }
        // isMobile ? setSlidesPerView(1) : setSlidesPerView(3)
    }, [isMobile, isMedium])

    // affichage des donnes de la base de donnee
//   const [data, setData] = useState([])
  
//   useEffect(()=>{
//       fetch("http://localhost:3000/actu")
//       .then(res =>res.json())
//       .then(data =>setData(data))
//       .catch(err => console.log(err));
//   }, [])


  return (
    <>
    <div className='mx-[5%] '>
        <h1 className='services text-center text-[35px] font-bold my-10'>ACTUALITES</h1>
        <Swiper className=' flex'
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={70}
                        slidesPerView={slidesPerView}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: false }}
                    >
                    {/* {data.map((data, i)=>( */}
                        <SwiperSlide 
                            // key={i} 
                            className='SwiperSlide flex'>
                            <div  className="card1 mx-auto rounded w-full bg-cover bg-center bg-no-repeat h-[60vh] bg-[url('/assets/img/Livre.jpeg')]">
                                <div className="bg_card p-2">
                                    <h3 className='titre-actualite text-lg p-3 uppercase text-white'>
                                       {/* {data.titre} */}
                                       titre
                                    </h3>
                                    <p className='theme-actualite h-10 px-[4%] py-[8%] text-justify text-xl '>
                                       <span className='theme'>Thème:</span>
                                        <span className=''> 
                                            {/* {data.theme} */}
                                            Theme
                                        </span> 
                                    </p>
                                    <button 
                                        // onClick={()=>{
                                        //     setSelectedData(data);
                                        //     setShowModal(true)
                                        // }}
                                        className="font-bold absolute left-[25%] text-xl mt-[50%] ml-[2%] bg-[#FFACFF] rounded px-5 py-2 hover:bg-blanc  hover:text-[#FFACFF] ">
                                        Lire la suite
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    {/* ))} */}
                    <SwiperSlide 
                            // key={i} 
                            className='SwiperSlide flex'>
                            <div  className="card1 mx-auto rounded w-full bg-cover bg-center bg-no-repeat h-[60vh] bg-[url('/assets/img/medicament.jpg')]">
                                <div className="bg_card p-2">
                                    <h3 className='titre-actualite text-lg p-3 uppercase text-white'>
                                       {/* {data.titre} */}
                                       titre
                                    </h3>
                                    <p className='theme-actualite h-10 px-[4%] py-[8%] text-justify text-xl '>
                                       <span className='theme'>Thème:</span>
                                        <span className=''> 
                                            {/* {data.theme} */}
                                            Thème
                                        </span> 
                                    </p>
                                    <button 
                                        // onClick={()=>{
                                        //     setSelectedData(data);
                                        //     setShowModal(true)
                                        // }}
                                        className="font-bold absolute left-[25%] text-xl mt-[50%] ml-[2%] bg-[#FFACFF] rounded px-5 py-2 hover:bg-blanc  hover:text-[#FFACFF] ">
                                        Lire la suite
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide 
                            // key={i} 
                            className='SwiperSlide flex'>
                            <div  className="card1 mx-auto rounded w-full bg-cover bg-center bg-no-repeat h-[60vh] bg-[url('/assets/img/education.jpeg')]">
                                <div className="bg_card p-2">
                                    <h3 className='titre-actualite text-lg p-3 uppercase text-blanc'>
                                       {/* {data.titre} */}
                                       Jeunesse
                                    </h3>
                                    <p className='theme-actualite h-10 px-[4%] py-[8%] text-justify text-xl '>
                                       <span className='theme text-rouge text-bold inderline'>Thème : </span>
                                        <span className='text-rouge'> 
                                            {/* {data.theme} */}
                                            Comment éduquer les jeunes
                                        </span> 
                                    </p>
                                    <button 
                                        // onClick={()=>{
                                        //     setSelectedData(data);
                                        //     setShowModal(true)
                                        // }}
                                        className="font-bold absolute left-[25%] text-xl mt-[50%] ml-[2%] bg-[#FFACFF] rounded px-5 py-2 hover:bg-blanc  hover:text-[#FFACFF] ">
                                        Lire la suite
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide 
                            // key={i} 
                            className='SwiperSlide flex'>
                            <div  className="card1 mx-auto rounded w-full bg-cover bg-center bg-no-repeat h-[60vh] bg-[url('/assets/img/doc.jpeg')]">
                                <div className="bg_card p-2">
                                    <h3 className='titre-actualite text-lg p-3 uppercase text-blanc'>
                                       {/* {data.titre} */}
                                       Société
                                    </h3>
                                    <p className='theme-actualite h-10 px-[4%] py-[8%] text-justify text-xl '>
                                       <span className='theme text-rouge'>Thème : </span>
                                        <span className='text-rouge'> 
                                            {/* {data.theme} */}
                                            La dépendance alcoolique
                                        </span> 
                                    </p>
                                    <button 
                                        // onClick={()=>{
                                        //     setSelectedData(data);
                                        //     setShowModal(true)
                                        // }}
                                        className="font-bold absolute left-[25%] text-xl mt-[50%] ml-[2%] bg-[#FFACFF] rounded px-5 py-2 hover:bg-blanc  hover:text-[#FFACFF] ">
                                        Lire la suite
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                </Swiper>
        {/* <LireSuite data={selectedData} onClose={handleOnClose} visible={showModal}/> */}
                    
    </div>

    </>
  )
}

export default  Actualite;
