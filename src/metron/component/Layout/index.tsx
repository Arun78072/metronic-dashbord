import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import styled, { useTheme } from 'styled-components'
export default function Layout(p: any) {
    const theme = useTheme()
    return (
        <LayoutSection theme={theme}>
            <SideBar />
            <div className="section_child">
                <NavBar />
                <div className="content_section">
                    {p.children}
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
    background:${p => p.theme.base};
}
.content_section{
    background:${p => p.theme.base};
    width:100%;
}
`