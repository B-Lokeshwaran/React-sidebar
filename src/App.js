import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Applications, AllApplications, AddNewApp} from './pages/Applications'
import {Shopify, AllShopify, AddNewShop} from './pages/Shopify'
import {AuthenticationProviders, AllAuthenticationProviders, AddNewAuth} from './pages/AuthenticationProviders'
import Dashboard from './pages/Dashboard'
import {Providers, AllProviders, AddNewPro} from './pages/Providers'
function App() {
  return (
    <Router>
    <Sidebar/>
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route path='/applications' element={<Applications/>}/>
      <Route path='/applications/allapplications' element={<AllApplications/>}/>
      <Route path='/applications/addnew' element={<AddNewApp/>}/>
      <Route path='/shopifystores' element={<Shopify/>}/>
      <Route path='/shopifystores/allshopifystores' element={<AllShopify/>}/>
      <Route path='/shopifystores/addnew' element={<AddNewShop/>}/>
      <Route path='/authenticationproviders' element={<AuthenticationProviders/>}/>
      <Route path='/authenticationproviders/allauthenticationproviders' element={<AllAuthenticationProviders/>}/>
      <Route path='/authenticationproviders/addnew' element={<AddNewAuth/>}/>
      <Route path='/providers' element={<Providers/>}/>
      <Route path='/providers/allproviders' element={<AllProviders/>}/>
      <Route path='/providers/addnew' element={<AddNewPro/>}/>

    </Routes>
    </Router>
  );
}

export default App;