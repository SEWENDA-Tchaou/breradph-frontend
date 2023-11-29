import PropTypes from 'prop-types'

function LireSuite({data , visible, onClose }) {
    if(!visible) return null;
    
  return (
    <div className=' z-50 fixed inset-0 bg-noir/60 backdrop-blur-sm flex justify-center  '>
        <div className='w-full m-[8%] bg-bleuClair rounded'>
          <div className="flex  justify-center items-center">
            <p className='text-2xl ml-[40%] w-1/2 font-extrabold'>Details</p>
            <button 
              className=' py-2 px-10  justify-end items-end hover:bg-rouge hover:text-blanc rounded-tr'
              onClick={onClose}>
                fermer
          </button>
          </div>
          
          <div className="p-3">
            {data && <div className=' flex'>
                  <div  className=" mx-auto w-[100%] rounded ">
                    <div className="bg_card p-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className='titre-actualite text-lg p-3 uppercase text-white'>
                                {data.titre}
                            </h3>
                            <p className='theme-actualite h-10 p-3  text-justify text-xl '>
                                <span className='py-[3%]'> {data.theme} </span> 
                            </p>
                          </div>
                            <div
                            className="w-1/3"
                            //  style={{  height: `20vh`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`,} }
                            >
                                <img src={data.url} alt=""  className="h-[20vh] hover:h-[100vh] hover:absolute hover:top-[-0vh] "/>
                            </div>
                        </div>
                        <span className='h-10 px-[3%] py-[5%] text-justify text-xl'> 
                          {/* {data.themeTout}  */}
                          Éduquer les jeunes est une tâche complexe mais cruciale pour le développement d'individus responsables, autonomes et éthiques. Voici quelques principes et conseils qui peuvent être utiles dans ce processus :

Modèle de rôle : Les adultes, qu'il s'agisse de parents, d'enseignants ou d'autres figures d'autorité, jouent un rôle essentiel en tant que modèles pour les jeunes. Le comportement exemplaire et les valeurs démontrées par les adultes ont un impact significatif sur la formation des attitudes et des comportements des jeunes.

Communication ouverte : Encouragez la communication ouverte et honnête. Les jeunes doivent se sentir à l'aise de partager leurs préoccupations, leurs idées et leurs questions. Créez un environnement où le dialogue est valorisé, ce qui favorise la compréhension mutuelle.
                        </span>                         
                    </div>
                </div>
            </div>}
          </div>
        </div>
    </div>
  )
}

LireSuite.propTypes = {
  data: PropTypes.string.isRequired,
  visible: PropTypes.string.isRequired,
  onClose: PropTypes.string.isRequired,
};

export default LireSuite;


//====================================
