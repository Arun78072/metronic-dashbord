import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import CustomeThemeProvider from '../theme/CustomeThemeProvider';
import Layout from './component/Layout'
import AddUser from './views/AddUser';
import HomePage from './views/Dashboard';
import UserDetailsPage from './views/UserDetailsPage';
import Users from './views/Users';
export default function Metron() {
    return (
        <div>
            <CustomeThemeProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/table" element={<Users />} />
                        <Route path="/user" element={<UserDetailsPage />} />
                        <Route path="/adduser" element={<AddUser />} />
                    </Routes>
                </Layout>
                {/* <Route path="/edit/:name" element={<EditContact />} /> */}
            </CustomeThemeProvider>
        </div>
    )
}
