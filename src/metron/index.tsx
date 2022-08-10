import React from 'react'
// import { ThemeProvider } from 'styled-components';
import CustomeThemeProvider from '../theme/CustomeThemeProvider';
import Layout from './component/Layout'
export default function Metron() {

    return (
        <div>
            <CustomeThemeProvider>
                <Layout />
            </CustomeThemeProvider>
        </div>
    )
}
