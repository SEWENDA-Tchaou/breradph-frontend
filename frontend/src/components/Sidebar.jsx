import { NavLink } from 'react-router-dom';

function Sidebar() {
  const SidebarMenu = [
    {
      path: "/acceuil",
      name: "Page d'acceuille"
    },
    {
      path: "/conseil",
      name: "Conseils"
    },
    {
      path: "/actualite",
      name: "Actualite"
    },
   
  ];
  // =================
  const voirNewsletter = [
    {
      path: "/Newsletter",
      name: "Newsletter"
    }
  ]

  return (
    <div >
      <h1 className='text-xl flex justify-center items-center h-20 border-b-2 text-rouge uppercase'>Metter a jour votre Site</h1>
      {
        SidebarMenu.map((item, index) => {
          return(
            <div key={index} className='hover:bg-white hover: hover: my-0  border-b-2'>
              <NavLink to={item.path}>
                <span
                  className='text-xl flex justify-center items-center h-20 '
                  // eslint-disable-next-line react/no-unknown-property
                  activeClassName='active'
                >
                  {item.name}
                </span>
              </NavLink>
            </div>
          )
        })
      }
           <h3 className="text-center text-rouge m-5">VOIR LE(S) ABONNE(E)(S) DU NEWSLETTER</h3>
    {
        voirNewsletter.map((item, index)=>{
            return(
                <div key={index} className='hover:bg-white hover: hover: my-0  border-b-2'>
                  <NavLink to={item.path} className="">
                    <span 
                      className='text-xl flex justify-center items-center h-20 border-t-2  border-t-rouge'
                      // eslint-disable-next-line react/no-unknown-property
                      activeClassName='active'
                      >
                        {item.name}
                      </span>
                  </NavLink>
                </div>
            )
        })
     } 
    </div>
  )
}

export default Sidebar;
