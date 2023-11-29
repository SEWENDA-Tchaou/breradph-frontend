import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Accueil from './pagesSite/Accueil';
// import APropos from './pagesSite/APropos';
// import Services from './pagesSite/Services';
// import Contact from './pagesSite/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import All from './PageDashboard/All';
import Conseil from './PageDashboard/Conseil';
// import Hotel from './PageDashboard/Hotel';
// import PageAcceuil from './PageDashboard/PageAcceuil';
import QuiSommesNous from './pagesSite/QuiSommesNous';
// import Conditions from './components/Conditions';
// import UpdateAll from './PageDashboard/UpdateAll';
import ActualiteUpdate from './PageDashboard/ActualiteUpdate';
import PageAcceuille from './PageDashboard/PageAcceuille';
import Actualite from './PageDashboard/Actualite';
// import Commentaires from './PageDashboard/Commentaires';
import Newsletter from './PageDashboard/Newsletter';
import ConseilUpdate from './PageDashboard/ConseilUpdate'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/apropos" element={<APropos />} />*/}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/QuiSommesNous" element={<QuiSommesNous />} />
{/* <Route path="/allcontact" element={<All />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/conseil" element={<Conseil />} />
          <Route path="/acceuil" element={<PageAcceuille />} />
          <Route path="/newsletter" element={<Newsletter />} /> 
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/updateActu/:id" element={<ActualiteUpdate />} />
          <Route path="/updateConseil/:id" element={<ConseilUpdate />} />
            {/*<Route path="/conditions" element={<Conditions />} />
          <Route path="/pageAcceuil" element={<PageAcceuil />} />
          <Route path="/update/:id" element={<UpdateAll />} />
          <Route path="/commentaire" element={<Commentaires />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
