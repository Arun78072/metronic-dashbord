
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../progressBar';


export default function TeamPerformance() {
    const theme = useTheme()
    return (
        <OrderData theme={theme}>
            <div className='section_box' >
                <div className='heading_section flex justify-between items-center'>
                    <div>
                        <h2>STATUS</h2>
                        <h1>Team Performance</h1>
                    </div>
                    <span className='icon'><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                </div>
                <div>
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
            span svg{
                color:${p => p.theme.primary};
                font-size: 20px;
                padding: 6px 12px;
                background:${props => rgba(props.theme.primary, 0.2)};  
                border-radius: 6px;
            }
        }
    }
    .team_box{
        background:${props => props.theme.paper};
        transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        h1 {
            font-weight: 600;
            font-size: 18px;
        }
    }
   
    .team_box:hover {
        transform: scale(1.08);
        box-shadow: rgb(203 204 210 / 5%) 0px 0.56875rem 3.3rem, rgb(203 204 210 / 7%) 0px 0.9975rem 2.4rem, rgb(203 204 210 / 10%) 0px 0.35rem 1rem, rgb(203 204 210 / 15%) 0px 0.225rem 0.8rem;
    }
    .team_box span {
    background: #ff6a00;
    padding: 20px;
    border-radius: 50%;
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




