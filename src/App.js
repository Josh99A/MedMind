import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ConfirmationPage from './routes/ConfirmationPage';
import DashboardPage from './routes/Dashboard';
import ErrorPage from './routes/Error';
import KYCPage from './routes/KYC';
import LandingPage from './routes/Landing';
import LoginPage from './routes/Login';
import PostLoginPage from './routes/PostLogin';
import ProductsPage from './routes/Products';
import SelfOnboarding from './routes/SelfOnboarding';
import SignUpPage from './routes/SignUp';
import ContactInformation from './components/ContactInformation';
import CompanyInformation from './components/CompanyInformation';
import LocationInformation from './components/LocationInformation';
import NextOfKin from './components/NextOfKin';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/post-signup" element={<PostLoginPage />} />
        <Route path="/self-onboarding" element={<SelfOnboarding />}>
          <Route path="contact-information" element={<ContactInformation />} />
          <Route path="company-information" element={<CompanyInformation />} />
          <Route
            path="location-information"
            element={<LocationInformation />}
          />
          <Route
            path="next-of-kin"
            element={<NextOfKin />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
