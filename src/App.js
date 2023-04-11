import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/uploadPhoto';
import AccountPage from './pages/AccountPage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}></Route>
            <Route path='account' element={<AccountPage/>}></Route>
            <Route path='main' element={<MainPage/>}></Route>
            <Route path='profile' element={<ProfilePage/>}></Route>
            <Route path='edit' element={<EditProfile/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
