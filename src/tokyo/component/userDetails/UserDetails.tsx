import React, { useState } from 'react';
import { PrimaryButton, SecandaryButton } from "../../../component/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styled, { useTheme } from "styled-components";
import { rgba } from "polished"
import UserProfile from '../../container/userProfile';
import Overview from './Overview';
import { Link } from 'react-router-dom';
import Logs from './Logs';
// import Security from './Security';
export default function UserDetails() {
    const theme = useTheme()
    const [active, SetActive] = useState('Overview')
    return (
        <DetailsSection theme={theme}>
            <div className="section_wrap">

                <div className="filter_section flex justify-between items-center my-4">
                    <div>
                        <h1>View User Details</h1>
                        <p>Home - User Management - Users</p>
                    </div>
                    <div className="flex gap-2">
                        <PrimaryButton><FontAwesomeIcon icon={faFilter} /> Filter</PrimaryButton>
                        {/* <SecandaryButton><Link to='/edit/emma'>Edit Profile</Link></SecandaryButton> */}
                        <SecandaryButton>Edit Profile</SecandaryButton>
                    </div>
                </div>
                <div className='user_section'>
                    <UserProfile />
                    <div className="tab_section">
                        <div className="button_section">
                            <button onClick={() => { SetActive('Overview') }} className={active === 'Overview' ? 'active' : ''}>Overview</button>

                            <button onClick={() => { SetActive('Logs') }} className={active === 'Logs' ? 'active' : ''}>Logs</button>
                        </div>
                        <div>
                            {active === 'Overview' ?
                                <div className='tab_tile'><Overview /></div>
                                : active === 'Logs' ?
                                    <div className='tab_tile'><Logs /></div>
                                    : <></>}
                        </div>
                    </div>
                    <div></div>

                </div>

            </div>

        </DetailsSection>
    )
}
const DetailsSection = styled.section`
    max-width:1400px;
    margin:auto;
    padding:20px;
    color:${p => p.theme.pure};
.filter_section{
    @media (max-width:450px) {
        flex-direction: column;
        gap: 20px;
        align-items: self-start;
    }
    h1{
        font-weight: 600;
        font-size: 20px;
    }
    p{
        color:${p => rgba(p.theme.pure, 0.2)};
        font-size: 14px;
    }
}   
.section_wrap{
    padding: 30px;
    @media (max-width:786px){
        padding:0px;
    }
}

.user_section{
    @media (max-width:786px){
        flex-direction: column;
    }
}
.tab_section{
    width:100%;

    @media (max-width:786px){
        width:100%;
        padding-left: 0px;
    }
    .button_section{
        margin-bottom:30px;
    }
    .button_section button {
        margin-right: 20px;
        font-size: 16px;
        font-weight: 600;
        border: 2px solid;
        border-width: 0px 0px 2px 0px;
        padding: 14px 0px;
        border-color:transparent;
        color:${p => rgba(p.theme.pure, 0.6)}
    }
    .button_section button:hover{
        border-color:${p => p.theme.primary};
    }
    .button_section .active {
            color: ${p => p.theme.primary};
            border-color:${p => p.theme.primary};
    }
    .tab_tile {
        background: ${p => p.theme.paper};
        padding: 20px;
        border-radius: 6px;
    }
}

`