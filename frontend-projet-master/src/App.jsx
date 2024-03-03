import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './app_components/Loading/Loading';
const Dashboard = lazy(() => import('./app_components/Dashboard/Dashboard'));
const Login = lazy(() => import('./app_components/Auth/Login'));
const PresentationV2 = lazy(() => import('./app_components/PresentationV2'));
const PractitionerDetails = lazy(() => import('./app_components/PractitionerDetails'));
const BecomePractitioner = lazy(() => import('./app_components/BecomePractitioner'));
const Nous = lazy(() => import('./app_components/Nous'));
const Propos = lazy(() => import('./app_components/Propos'));
const Calendar = lazy(() => import('./app_components/Calendar'));
const Contact = lazy(() => import('./app_components/Contact'));
const HypnosePage = lazy(() => import('./app_components/HypnosePage'));
const AllSpecialitiesPage = lazy(() => import('./app_components/AllSpecialitiesPage'));
const AuriculotherapyPage = lazy(() => import('./app_components/AuriculotherapyPage'));
const AllDisorders = lazy(() => import('./app_components/AllDisorders'));
const BriefTherapiesPage = lazy(() => import('./app_components/BriefTherapiesPage'));
const ChiporaxiePage = lazy(() => import('./app_components/ChiporaxiePage'));
const EnergeticpracticesPage = lazy(() => import('./app_components/EnergeticpracticesPage'));
const HypnosisPage = lazy(() => import('./app_components/HypnosisPage'));
const KinesiologyPage = lazy(() => import('./app_components/KinesiologyPage'));
const LifeCoachingPage = lazy(() => import('./app_components/LifeCoachingPage'));
const MassagePage = lazy(() => import('./app_components/MassagePage'));
const MeditationPage = lazy(() => import('./app_components/MeditationPage'));
const NaturopathyPage = lazy(() => import('./app_components/NaturopathyPage'));
const NutritionPage = lazy(() => import('./app_components/NutritionPage'));
const OsteopathyPage = lazy(() => import('./app_components/OsteopathyPage'));
const PsychologistPage = lazy(() => import('./app_components/PsychologistPage'));
const PsychotherapyPage = lazy(() => import('./app_components/PsychotherapyPage'));
const ReflexologyPage = lazy(() => import('./app_components/ReflexologyPage'));
const ShiatsuPage = lazy(() => import('./app_components/ShiatsuPage'));
const SophrologyPage = lazy(() => import('./app_components/SophrologyPage'));
const TraditionalChineseenergeticsPage = lazy(() => import('./app_components/TraditionalChineseenergeticsPage'));
const TraditionalJapaneseMedicinePage = lazy(() => import('./app_components/TraditionalJapaneseMedicinePage'));
const YogaPage = lazy(() => import('./app_components/YogaPage'));


const LazyLoader = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LazyLoader>
            <PresentationV2 />
          </LazyLoader>
        } />
        <Route path="/login" element={
          <LazyLoader>
            <Login />
          </LazyLoader>
        } />
        
        <Route path="/dashboard" element={
          <LazyLoader>
            <Dashboard />
          </LazyLoader>
        } />
        <Route path="/details/:id" element={
          <LazyLoader>
            <PractitionerDetails />
          </LazyLoader>
        } />
        

        <Route path="/become-practitioner" element={
          <LazyLoader>
            <BecomePractitioner />
          </LazyLoader>
        } />
        <Route path="/nous" element={
          <LazyLoader>
            <Nous />
          </LazyLoader>
        } />

        <Route path="/hypnose" element={
          <LazyLoader>
            <HypnosePage />
          </LazyLoader>
        } />

     

        <Route path="/allspecialities" element={
          <LazyLoader>
            <AllSpecialitiesPage />
          </LazyLoader>
        } />
         <Route path="/alldisorders" element={
          <LazyLoader>
            <AllDisorders />
          </LazyLoader>
        } />
         <Route path="/propos" element={
          <LazyLoader>
            <Propos />
          </LazyLoader>
        } />
        <Route path="/calendar" element={
          <LazyLoader>
            <Calendar />
          </LazyLoader>
        } />

        <Route path="/contact" element={
          <LazyLoader>
            <Contact />
          </LazyLoader>
        } />

        <Route path="/auriculotherapy" element={
          <LazyLoader>
            <AuriculotherapyPage />
          </LazyLoader>
        } /> 

        <Route path="/briefTherapies" element={
          <LazyLoader>
            <BriefTherapiesPage />
          </LazyLoader>
        } /> 

        <Route path="/briefTherapies" element={
          <LazyLoader>
            <BriefTherapiesPage />
          </LazyLoader>
        } /> 
        
        <Route path="/chiporaxie" element={
          <LazyLoader>
            <ChiporaxiePage />
          </LazyLoader>
        } />

        <Route path="/energeticpractices" element={
          <LazyLoader>
            <EnergeticpracticesPage />
          </LazyLoader>
        } /> 


        <Route path="/hypnosis" element={
          <LazyLoader>
            <HypnosisPage />
          </LazyLoader>
        } />

        <Route path="/kinesiology" element={
          <LazyLoader>
            <KinesiologyPage />
          </LazyLoader>
        } />  

        <Route path="/lifeCoaching" element={
          <LazyLoader>
            <LifeCoachingPage />
          </LazyLoader>
        } /> 

        <Route path="/massage" element={
          <LazyLoader>
            <MassagePage />
          </LazyLoader>
        } /> 

        <Route path="/meditation" element={
          <LazyLoader>
            <MeditationPage />
          </LazyLoader>
        } />

        <Route path="/naturopathy" element={
          <LazyLoader>
            <NaturopathyPage />
          </LazyLoader>
        } />

        <Route path="/nutrition" element={
          <LazyLoader>
            <NutritionPage />
          </LazyLoader>
        } />


        <Route path="/osteopathy" element={
          <LazyLoader>
            <OsteopathyPage />
          </LazyLoader>
        } />

        <Route path="/psychologist" element={
          <LazyLoader>
            <PsychologistPage />
          </LazyLoader>
        } />

        <Route path="/psychotherapy" element={
          <LazyLoader>
            <PsychotherapyPage />
          </LazyLoader>
        } />

        <Route path="/reflexology" element={
          <LazyLoader>
            <ReflexologyPage />
          </LazyLoader>
        } />

        <Route path="/shiatsu" element={
          <LazyLoader>
            <ShiatsuPage />
          </LazyLoader>
        } />

        <Route path="/sophrology" element={
          <LazyLoader>
            <SophrologyPage />
          </LazyLoader>
        } />

        <Route path="/traditionalChineseenergetics" element={
          <LazyLoader>
            <TraditionalChineseenergeticsPage />
          </LazyLoader>
        } />

        <Route path="/traditionalJapaneseMedicine" element={
          <LazyLoader>
            <TraditionalJapaneseMedicinePage />
          </LazyLoader>
        } />

        <Route path="/yoga" element={
          <LazyLoader>
            <YogaPage />
          </LazyLoader>
        } />        
        
      </Routes>
    </Router>
  );
}
