import ReadMission from "../components/ReadMission";
import ReadPrincipe from "../components/ReadPrincipe";
import ReadValeur from "../components/ReadValeur";
import BRERA from "/assets/img/BRERA.png";
// import cardiologue from '/assets/img/cardiologue.png';


function QuiSommesNous () {

    return (
        <div className="mx-[1%] lg:mx-[7%] ">
            <h1 className="text-[35px] text-center font-bold mt-[60px]">QUI SOMMES NOUS ?</h1>
            <div className="flex   ">
                <p className="text_Qui_Sommes_nous text-[20px]  bg-no-repeat bg-cover W-1/2 2xl:text-3xl">
                    BRERA/DPH est une structure qui aide l’individu à diagnostiquer 
                    nettement sa situation et ses problèmes et à se décider pour une
                    nouvelle vie heureuse. Elle est le point de départ d’une vie reconquise.
                    Elle abrite le symbole du couple pour corriger les défaillances et seconde
                    ses acteurs et actrices pour s’effacer devant eux/elles tout en leur apportant
                    son aide et son réconfort. C’est celle qui par son effacement, sa fidélité et 
                    sa constance favorise l’aboutissement de l’entreprise commencée. C’est un labeur
                    silencieux mais efficace. Et c’est le retour au calme et à la paix après une période
                    confuse.
                </p>
                <div className="logo_fond max-lg:hidden">
                    <img src={BRERA} alt="" className=""/>
                </div>              
            </div>

            <div className=" max-md:flex-wrap flex justify-around ">
                <div className=" bg-[url('/assets/img/1.jpeg')] lg:mx-12 h-full w-full bg-cover bg-no-repeat max-lg:w-full m-[30px] rounded-2xl ">
                    <div className='bg-noir/30  h-full rounded-2xl'>
                        <h1 className=' text-[25px] text-[#C9FFFF] text-center '>Prise en charge Psychologique </h1>
                        <p className='text-docteur text-sm text-justify text-blanc px-2 '>
                            Elle utilise des thérapies excellentes qui s’appliquent à tous les domaines de la Vie humaine. Elle vient appui à la prise en charge médicale dans son intervention holistique. 
                        </p>
                    </div>
                </div>
                <div className="fonction w-full  bg-[url('/assets/img/3.jpg')] lg:mx-12  bg-cover bg-no-repeat max-lg:w-full m-[30px] rounded-2xl">
                   <div className='bg-noir/30 w-full h-full  rounded-2xl'>
                        <h1 className=' text-[25px] text-[#C9FFFF] text-center py-5'>Assistance médicale </h1>
                        <p className='text-docteur text-sm text-justify text-blanc p-3'>
                            Elle prend en charge toutes les maladies dans leur généralité. Elle vient également.
                        </p>
                   </div>
                </div>
                <div className="fonction w-full bg-[url('/assets/img/2.jpg')] lg:mx-12 bg-contain bg-no-repeat max-lg:w-full m-[30px] rounded-2xl ">
                   <div className='bg-noir/30 w-full h-full rounded-2xl'>
                    <h1 className=' text-[25px] text-[#C9FFFF] text-center py-3'>Prise en charge médicale spécialisée </h1>
                    <p className='text-docteur text-sm text-justify text-blanc p-3'>
                        Il s’agit de la prise en charge de maladie psychosomatique surtout cardiologique. 
                    </p>
                   </div>
                </div>                
            </div>
            <div className=" md:flex p-2 justify-around ">
                <div className="w-1/3 max-sm:border  max-sm:my-3 max-sm:w-full h-full lg:border lg:border-noir/30 lg:shadow-md lg:hover:shadow-inner lg:rounded-full lg:p-14">
                    <h1 className="text-[30px] font-bold text-center text-rouge  ">MISSION</h1>
                    <p className="text-[15px] text-center">
                        <ReadMission
                       limit = {100} 
                        > 
                            Notre mission est que: Chaque individu et/ou groupe d’individus se réhabilite et se réalise afin d’améliorer et de maintenir la qualité de sa vie et celle des autres créatures. Ainsi, à BRERA/DPH l’auto-emploi et l’auto-prise en charge sont une réalité à vivre par tous les acteurs et actrices ; ce n’est pas uniquement un rêve mais un rêve devenu réalité.
                        </ReadMission>                     
                    </p>
                </div>
                <div className="w-1/3 max-sm:border max-sm:my-3 md:mx-5 max-sm:w-full h-full lg:border lg:border-noir/30 lg:shadow-md lg:hover:shadow-inner lg:rounded-full lg:p-14">
                    <h1 className="text-[30px] font-bold text-center text-rouge">VALEUR</h1>
                    <p className="text-[15px] text-center">
                        <ReadValeur>
                            Nos valeurs sont : <br />
                            •	Volonté Existentielle : Chaque individu manifeste sa vie en respectant les droits de l’autre puisque nous croyons qu’à l’instant présent, il y a toujours la possibilité de satisfaire son besoin de vie sans contrainte particulière non discutable. <br />

                            •	Amour Naturel : Chaque individu est capable de propager affectueusement ses énergies existentielles dans son environnement pour le bon vivre ensemble. <br />

                            •	Vérité Ethérée :   Aucun individu ne détient à lui seul la compréhension, la connaissance, la droiture et la sagesse puisqu’elles sont toutes des attributs divins.
                        </ReadValeur>

                    </p>
                </div>
                <div className="w-1/3 max-sm:border max-sm:my-3 max-sm:w-full h-full lg:border lg:border-noir/30 lg:shadow-md lg:hover:shadow-inner lg:rounded-full lg:p-14">
                    <h1 className="text-[30px] font-bold text-center text-rouge">PRINCIPES</h1>
                    <p className="text-[15px] text-center">
                        <ReadPrincipe>
                            Ancrer sa vie en la VAV ; c’est partir de la stratégie SRA pour le bien-être. Ce qui incite à apprendre à : <br />
                            <span className="px-5">•	S’aimer</span> <br />
                            <span className="px-5">•	Se respecter</span> <br />
                            <span className="px-5">•	Se connaitre</span> <br />
                            <span className="px-5">•	Se responsabiliser</span> <br />
                            <span className="px-5">•	Être fidèle à soi-même</span> <br />
                            <span className="px-5">•	Se conduite</span>
                        </ReadPrincipe>
                    </p>
                </div>
            </div>
            <div className="my-12">
                <strong className="text-extrabold text-[30px]">Groupe cible : Acteurs/actrices de BRERA/DPH</strong>
                <p className="text-justify text-[20px]" id="services">
                    Il s’agit de l’enfant, du jeune et de l’adulte, du/de la célibataire, du veuf et de la veuve, du couple et de la famille (notamment la cellule familiale en difficulté de prise en charge de qualité de leur enfant) qui sollicite ses interventions. Il s’agit de tout individu/groupe d’individu s’intéressant aux difficultés de la satisfaction des besoins de vie. C’est, en effet, un groupe d’entraide mutuel qui fait face à une situation en respectant les lignes directrices des Nations-Unis relative aux droits des enfants et des jeunes.
                    Avec BRERA/DPH, réduisons ensemble la vulnérabilité surtout des enfants en leur aidant à vivre dans un foyer aimant et chaleureux et notamment dans leur famille biologique.
                    
                </p>
                
            </div>
            <div >

            </div>
      </div>
    );
}

export default QuiSommesNous ;