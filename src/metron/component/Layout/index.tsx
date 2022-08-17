import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import styled from 'styled-components'
// import Home from '../../../views/Home'
import ProductOrder from '../productOrder/productOrder'
import UserDetails from '../userDetails/UserDetails'

export default function Layout(p: any) {
    return (
        <LayoutSection>
            <SideBar />
            <div className="section_child">
                <NavBar />
                <div className="content_section">
                    <UserDetails />
                    <ProductOrder />
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
    overflow-y: scroll;
}
.content_section{
    background:#161421;
    width:100%;
}
`