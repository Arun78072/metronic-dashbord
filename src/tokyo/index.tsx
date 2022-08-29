import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CustomeThemeProvider from '../theme/CustomeThemeProvider';
import Layout from './component/Layout'
import ExpensesPage from './views/Expenses';
import Products from './views/Products';
import Reports from './views/Reports';


export default function Metron() {
    return (
        <div>
            <CustomeThemeProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Reports />} />
                        <Route path="/expenses" element={<ExpensesPage />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </Layout>
            </CustomeThemeProvider>
        </div>
    )
}
