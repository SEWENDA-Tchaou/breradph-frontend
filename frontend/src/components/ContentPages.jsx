
function ContentPages() {
  return (
    <div className='Img_Admin text-3xl flex justify-center items-center   w-full h-full bg-cover bg-center bg-[url("/assets/img/NewProject.jpg")]'>
      <div className='bg-noir/50 text-center text-blanc py-[2%] shadow-noir-2xl w-full h-full'>
        <p className="uppercase mt-44">
          BIENVENUE ADMIN BRERA/DPH
        </p>
        <a href='/conditions' target='_blank' className='underline text-sm'>{"Conditions d'utilisation"}</a>
      </div>
    </div>
  )
}

export default ContentPages;
