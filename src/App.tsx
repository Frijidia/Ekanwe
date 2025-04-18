import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import CreatorType from './pages/EkanwePages/CreatorType';
import Concept from './pages/EkanwePages/Concept';
import LoginOrConnect from './pages/LoginPages/LoginOrConnect';
import Connection from './pages/LoginPages/Connection';
import RegistrationStepOne from './pages/LoginPages/RegistrationStepOne';
import SocialConnectStep from './pages/LoginPages/SocialConnect';
import InterestsStep from './pages/LoginPages/InterestStep';
import PortfolioStep from './pages/LoginPages/PortfolioStep';
import ValidateInscription from './pages/LoginPages/ValidateIncription';
import Deals from './pages/CommercantsPages/Deals';
import DealSeeMore from './pages/CommercantsPages/DealsSeeMore';
import Suivis from './pages/CommercantsPages/SuivisDeals';
import DealDetailsPage from './pages/CommercantsPages/DealDetailsPage';
import SaveDealsPage from './pages/CommercantsPages/SaveDealsPage';
import Profile from './pages/CommercantsPages/Profile';
import NotificationPage from './pages/CommercantsPages/NotificationPage';
import LoginPage from './pages/LoginPages/Login';
import DealsPage from './pages/InfluenceursPages/DealsPage';
import MerchantDetailPage from './pages/InfluenceursPages/MerchantDetailPage';
import DealCandidatesPage from './pages/InfluenceursPages/DealCandidatesPage';
import DashboardPage from './pages/InfluenceursPages/DashboardPage';
import Register from './pages/LoginPages/Register';
import RegistrationComplete from './pages/LoginPages/RegistrationComplete';
import Profilinfluenceur from './pages/InfluenceursPages/ProfilInfluenceur';
import NotifyPage from './pages/InfluenceursPages/Notif';
import WelcomeComercant from './pages/EkanwePages/WelcomeComercant';
import WelcomeInfluenceur from './pages/EkanwePages/WelcomeInfluenceur';
import CreatorTypeInfluenceur from './pages/EkanwePages/CreatorTypeInfluenceur';
import ConceptInfluenceur from './pages/EkanwePages/ConceptInfluenceur';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcomecommercant" element={<WelcomeComercant />} />
        <Route path="/creator-type" element={<CreatorType />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/loginOrconnect' element={<LoginOrConnect/>} />
        <Route path='/connection' element={<Connection/>} />
        <Route path='/registerstepone' element={<RegistrationStepOne/>} />
        <Route path='/interestsstep' element={<InterestsStep/>} />
        <Route path='/socialconnect' element={<SocialConnectStep/>} />
        <Route path='/portfolio' element={<PortfolioStep/>} />
        <Route path='/validateinscription' element={<ValidateInscription/>} />
        <Route path='/deals' element={<Deals/>} />
        <Route path='/dealseemore' element={<DealSeeMore/>} />
        <Route path='/suivideals' element={<Suivis/>} />
        <Route path='/dealdetailspage' element={<DealDetailsPage/>} />
        <Route path='/savedealspage' element={<SaveDealsPage/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/notification' element={<NotificationPage/>} />

        <Route path="/welcomeinfluenceur" element={<WelcomeInfluenceur />} />
        <Route path="/dealInfluenceur" element={<DealsPage />} />
        <Route path="/merchantdetailpage" element={<MerchantDetailPage />} />
        <Route path="/dealCandidates" element={<DealCandidatesPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registercomplete" element={<RegistrationComplete />} />
        <Route path="/profilinfluenceur" element={<Profilinfluenceur />} />
        <Route path="/notifypage" element={<NotifyPage />} />
        <Route path="/creator-typeinfluenceur" element={<CreatorTypeInfluenceur />} />
        <Route path="/conceptinfluenceur" element={<ConceptInfluenceur />} />
      </Routes>
    </Router>
  );
}

export default App;