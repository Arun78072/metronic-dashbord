import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../progressBar';
import { SecandaryButton } from '../../../component/Buttons';


export default function MessengerWindow() {
    const theme = useTheme()
    return (
        <OrderData theme={theme}>
            <div className='section_box' >
                <div className='heading_section flex justify-between items-center'>
                    <div>
                        <h2>MESSAGES</h2>
                        <h1>Messenger Window</h1>
                    </div>
                    <span className='icon'>ET</span>
                </div>
                <div className='delete_section flex justify-between align-center px-6'>
                    <h4>Delete all </h4>
                    <h3>Emma Taylor</h3>
                </div>
                <div className='search_box'>
                    <input type='text' className='search_box' placeholder='Search messages...' />
                </div>
                <div className='profile_box'>
                    {Data.map((i) => {
                        return (
                            <div key={i.id} className='team_box flex items-center gap-5 p-5'>
                                <span>{i.logo}</span>
                                <div className='flex-1'>
                                    <h1>{i.name}</h1>
                                    <div className='progress_bar my-3'><ProgressBar color={i.barColor} percentage={i.percentage}></ProgressBar></div>
                                    <div className='status flex items-center justify-between'>
                                        <h3>{i.status}</h3>
                                        <h4>{i.date}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center my-[20px]'><SecandaryButton>View all participants</SecandaryButton></div>
            </div>
        </OrderData >
    )
}

const OrderData = styled.section`
    margin-top: 20px;
    .section_box{
        background:${props => props.theme.paper};
        color:${props => rgba(props.theme.pure, 0.6)};
        border-radius: 10px;
        border: 1px solid;
        border-color :  ${p => rgba(p.theme.pure, 0.2)};
        @media (max-width:450px){
                padding: 0px;
            }
            .heading_section {
            padding: 26px;
            h2 {
                font-weight: 700;
                color:${props => rgba(props.theme.pure, 0.4)};
            }
            h1{
                font-weight: 600;
                color:${props => rgba(props.theme.pure, 0.8)};
                font-size:18px;
            }
           
            span.icon {
                background: linear-gradient(135deg, rgb(107, 115, 255) 0%, rgb(0, 13, 255) 100%);
                border-radius: 50%;
                width: 46px;
                height: 46px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: 600;
                color:${props => rgba(props.theme.pure, 0.8)};
            }
            }
        input.search_box {
                width: 100%;
                padding: 10px;
                background: transparent;
                border: 1px solid ${props => rgba(props.theme.pure, 0.1)};
            }
    }
    .team_box{
        background:${props => props.theme.paper};
        
        h1 {
            font-weight: 600;
            font-size: 18px;
        }
        
    }
    .team_box span {
    background: #ff6a00;
    padding: 20px;
    border-radius: 50%;
    }
    .delete_section{
        padding: 10px;
        border: 1px solid ${props => rgba(props.theme.pure, 0.1)};
        h3{
            font-size: 18px;
            font-weight: 600;
            color:${props => rgba(props.theme.pure, 0.8)};
        }
        h4{
            color:${props => rgba(props.theme.danger, 0.8)};
            padding: 4px 10px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.4s;
        }
        h4:hover{
            background:${props => rgba(props.theme.danger, 0.2)};
        }
    }
    .profile_box {
        overflow-y: scroll;
        height: 312px;
    }
`
const Data = [
    {
        id: 1,
        name: 'Presentation UI',
        logo: 'GA',
        status: 'Completed',
        date: '15 th Sept',
        percentage: 80,
        barColor: '#fff720'
    },
    {
        id: 2,
        name: 'Presentation UI',
        logo: 'GA',
        status: 'Completed',
        date: '15 th Sept',
        percentage: 20,
        barColor: '#3cd500'
    },
    {
        id: 3,
        name: 'Presentation UI',
        logo: 'GA',
        status: 'Completed',
        date: '15 th Sept',
        percentage: 60,
        barColor: '#764ba2'
    },
    {
        id: 4,
        name: 'Presentation UI',
        logo: 'GA',
        status: 'Completed',
        date: '15 th Sept',
        percentage: 40,
        barColor: '#f55555'
    },
]




