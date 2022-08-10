import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import styled from 'styled-components'
import Home from '../../../views/Home'

export default function Layout(p: any) {
    return (
        <LayoutSection>
            <SideBar />
            <div className="section_child">
                <NavBar />
                <div className="content_section">
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    {/* {p.children} */}
                </div>
            </div>
        </LayoutSection>
    )
}
const LayoutSection = styled.section`
    display: flex;
.section_child{
    position: relative;
    width: 100%;
    height:100vh;
}
.content_section{
    background:#161421;
    width:100%;
}
`