import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './app_components/Loading/Loading';
const Login = lazy(() => import('./app_components/Auth/Login'));
const ForgotPassword = lazy(()=> import('./app_components/Auth/components/ForgotPassword'));
const ResetPassword = lazy(()=> import('./app_components/Auth/components/ResetPassword'));
const PresentationV2 = lazy(() => import('./app_components/PresentationV2'));
const PractitionerDetails = lazy(() => import('./app_components/PractitionerDetails'));
const BecomePractitioner = lazy(() => import('./app_components/BecomePractitioner'));
const AyurvedaPage = lazy(() => import('./app_components/Pages/AyurvedaPage'));
const Calendar = lazy(() => import('./app_components/Calendar'));
const Contact = lazy(() => import('./app_components/Contact'));
const AllSpecialitiesPage = lazy(() => import('./app_components/Pages/AllSpecialitiesPage'));
const AuriculotherapyPage = lazy(() => import('./app_components/Pages/AuriculotherapyPage'));
const AllDisorders = lazy(() => import('./app_components/Pages/AllDisorders'));
const BriefTherapiesPage = lazy(() => import('./app_components/Pages/BriefTherapiesPage'));
const ChiporaxiePage = lazy(() => import('./app_components/Pages/ChiporaxiePage'));         
const EnergeticpracticesPage = lazy(() => import('./app_components/Pages/EnergeticpracticesPage'));
const HypnosisPage = lazy(() => import('./app_components/Pages/HypnosisPage'));
const KinesiologyPage = lazy(() => import('./app_components/Pages/KinesiologyPage'));
const LifeCoachingPage = lazy(() => import('./app_components/Pages/LifeCoachingPage'));
const MassagePage = lazy(() => import('./app_components/Pages/MassagePage'));
const MeditationPage = lazy(() => import('./app_components/Pages/MeditationPage'));
const NaturopathyPage = lazy(() => import('./app_components/Pages/NaturopathyPage'));
const NutritionPage = lazy(() => import('./app_components/Pages/NutritionPage'));
const OsteopathyPage = lazy(() => import('./app_components/Pages/OsteopathyPage'));
const PsychologistPage = lazy(() => import('./app_components/Pages/PsychologistPage'));
const PsychotherapyPage = lazy(() => import('./app_components/Pages/PsychotherapyPage'));
const ReflexologyPage = lazy(() => import('./app_components/Pages/ReflexologyPage'));
const ShiatsuPage = lazy(() => import('./app_components/Pages/ShiatsuPage'));
const SophrologyPage = lazy(() => import('./app_components/Pages/SophrologyPage'));
const TraditionalChineseenergeticsPage = lazy(() => import('./app_components/Pages/TraditionalChineseenergeticsPage'));
const TraditionalJapaneseMedicinePage = lazy(() => import('./app_components/Pages/TraditionalJapaneseMedicinePage'));
const YogaPage = lazy(() => import('./app_components/Pages/YogaPage'));
const AddictionPage = lazy(() => import('./app_components/Pages/AddictionPage'));
const AllergiesintolerancePage = lazy(() => import('./app_components/Pages/AllergiesintolerancePage'));
const BackpainPage = lazy(() => import('./app_components/Pages/BackpainPage'));
const BecomeamotherPage = lazy(() => import('./app_components/Pages/BecomeamotherPage'));
const BehavioralproblemsPage = lazy(() => import('./app_components/Pages/BehavioralproblemsPage'));
const FatigueandsleepPage = lazy(() => import('./app_components/Pages/FatigueandsleepPage'));
const HeadachePages = lazy(() => import('./app_components/Pages/HeadachePages'));
const JointpainPage = lazy(() => import('./app_components/Pages/JointpainPage'));
const LosingweightPage = lazy(() => import('./app_components/Pages/LosingweightPage'));
const PainPage = lazy(() => import('./app_components/Pages/PainPage'));
const ParentandchildPage = lazy(() => import('./app_components/Pages/ParentandchildPage'));
const StomachachesPage = lazy(() => import('./app_components/Pages/StomachachesPage'));
const StopsmokingPage = lazy(() => import('./app_components/Pages/StopsmokingPage'));
const StressPage = lazy(() => import('./app_components/Pages/StressPage'));
const WellbeingPage = lazy(() => import('./app_components/Pages/WellbeingPage'));
const WhoarewePage = lazy(() => import('./app_components/WhoarewePage'));

import ReactGA from "react-ga4";

const LazyLoader = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default function App() {
  useEffect(() => {
    
    ReactGA.initialize("G-2PPWVTH1KE");
   ReactGA.send({
      hitType :"pageview",
      page : window.location.pathname,      
    })
  }, []);
  
 
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

        <Route path="/forgot-password" element={
          <LazyLoader>
            <ForgotPassword />
          </LazyLoader>
        } />

        <Route path="/reset-password" element={
          <LazyLoader>
            <ResetPassword />
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
        <Route path="/ayurveda" element={
          <LazyLoader>
            <AyurvedaPage />
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

        <Route path="/addiction" element={
          <LazyLoader>
            <AddictionPage />
          </LazyLoader>
        } />

        <Route path="/allergie" element={
          <LazyLoader>
            <AllergiesintolerancePage />
          </LazyLoader>
        } />

        <Route path="/backpain" element={
          <LazyLoader>
            <BackpainPage />
          </LazyLoader>
        } />

        <Route path="/becomeamother" element={
          <LazyLoader>
            <BecomeamotherPage />
          </LazyLoader>
        } />

        <Route path="/behavior" element={
          <LazyLoader>
            <BehavioralproblemsPage />
          </LazyLoader>
        } />

        <Route path="/fatigueandsleep" element={
          <LazyLoader>
            <FatigueandsleepPage />
          </LazyLoader>
        } />

        <Route path="/headache" element={
          <LazyLoader>
            <HeadachePages />
          </LazyLoader>
        } />

        <Route path="/jointpain" element={
          <LazyLoader>
            <JointpainPage />
          </LazyLoader>
        } />

        <Route path="/losingweight" element={
          <LazyLoader>
            <LosingweightPage />
          </LazyLoader>
        } />

        <Route path="/pain" element={
          <LazyLoader>
            <PainPage />
          </LazyLoader>
        } />

        <Route path="/parentandchild" element={
          <LazyLoader>
            <ParentandchildPage />
          </LazyLoader>
        } />

        <Route path="/stomachaches" element={
          <LazyLoader>
            <StomachachesPage />
          </LazyLoader>
        } />

        <Route path="/stopsmoking" element={
          <LazyLoader>
            <StopsmokingPage />
          </LazyLoader>
        } />

        <Route path="/stress" element={
          <LazyLoader>
            <StressPage />
          </LazyLoader>
        } />

        <Route path="/wellbeing" element={
          <LazyLoader>
            <WellbeingPage />
          </LazyLoader>
        } />   

         <Route path="/whoarewe" element={
          <LazyLoader>
            <WhoarewePage />
          </LazyLoader>
        } />                
        
      </Routes>
    </Router>
  );
}
