import HeaderAccueil from "../components/HeaderAccueil";
import QuiSommesNous from "../pagesSite/QuiSommesNous";
import Actualite from "../pagesSite/Actualite";
import NousContactez from "../pagesSite/NousContactez";
// import TalkForUs from "../components/TalkForUs";
import Footer from "../pagesSite/Footer";
import '../../src/App.css'
import NosServices from '../pagesSite/NosServices'
function Accueil() {
  return (
    <div>
      <HeaderAccueil />
      <QuiSommesNous />
      <NosServices />
      <Actualite />
       <NousContactez />
      <Footer />
    </div>
  )
}

export default Accueil;
