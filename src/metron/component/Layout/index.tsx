import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import styled, { useTheme } from 'styled-components'
import ProductOrder from '../productOrder/productOrder'
import UserDetails from '../userDetails/UserDetails'
import { Routes, Route, } from "react-router-dom";
import EditContact from '../editContact'
export default function Layout(p: any) {
    const theme = useTheme()
    return (
        <LayoutSection theme={theme}>
            <SideBar />
            <div className="section_child">
                <NavBar />
                <div className="content_section">
                    <Routes>
                        <Route path="/" element={<UserDetails />} />
                        <Route path="/table" element={<ProductOrder />} />
                        <Route path="/edit/:name" element={<EditContact />} />
                    </Routes>
                    {/* 
                    <UserDetails />
                    <ProductOrder /> */}
                    {/* {p.children} */}
                </div>
            </div>
        </LayoutSection >
    )
}
const LayoutSection = styled.section`
    display: flex;
.section_child{
    position: relative;
    width: 100%;
    height:100vh;
    overflow-y: scroll;
}
.content_section{
    background:${p => p.theme.base};
    width:100%;
}
`