import React, { useEffect, useState } from 'react';
import { padding, rgba } from 'polished'
import styled, { useTheme } from 'styled-components'
import TotalRevenueChart from '../charts/TotalRevenueChart'
import WeeklySalesChart from '../charts/WeeklySalesChart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faAngleDown, faArrowDown, faFileArrowDown, faSleigh } from '@fortawesome/free-solid-svg-icons';
import { SecandaryButton } from '../../../component/Buttons';
import { TokyoPrimaryButton } from '../buttons/PrimaryBtn';
import UsersAnalytics from './UsersAnalytics';
import WeeklySales from './WeeklySales';
import AccountSubscription from './AccountSubscription';
export default function Dashboard() {
    const theme = useTheme()
    // const [number, setNumber] = useState<any>()
    const Data = [
        {
            id: 1,
            title: 'Orders',
            icon: faSleigh,
            number: '$3,594',
            priceicon: faArrowDown,
            description: '+36% from last month',
        },
        {
            id: 2,
            title: 'Reports',
            icon: faSleigh,
            number: '987',
            priceicon: faArrowDown,
            description: '+65% from last month',
        },
        {
            id: 3,
            title: 'Customers',
            icon: faSleigh,
            number: '17,865',
            priceicon: faArrowDown,
            description: '+22% from last month',
        },
        {
            id: 4,
            title: 'Sales',
            icon: faSleigh,
            number: '$65,489',
            priceicon: faArrowDown,
            description: '-15.35% from last month',
        },
    ]
    return (
        <DashboardSection theme={theme}>
            <Heading className='flex items-center justify-between pb-5'>
                <div className='content flex gap-4 items-center'>
                    <FontAwesomeIcon icon={faBell} />
                    <span>
                        <h1>Reports</h1>
                        <p>Custom dashboard built using the included components</p>
                    </span>
                </div>
                <div className='buttons flex gap-2'>
                    <TokyoPrimaryButton>Last Year <FontAwesomeIcon icon={faAngleDown} /></TokyoPrimaryButton>
                    <SecandaryButton><FontAwesomeIcon icon={faFileArrowDown} /> Export</SecandaryButton>
                </div>
            </Heading>
            <div className='top_section'>
                {Data.map((i, ix) => {
                    return (
                        <div key={ix}>
                            <div className='title flex items-center gap-2'><span><FontAwesomeIcon icon={i.icon} /></span><h2>{i.title}</h2> </div>
                            <h1 className='price'><FontAwesomeIcon icon={i.priceicon} />{i.number}</h1>
                            <p>{i.description} </p>
                        </div>
                    )
                })}
            </div>
            <div className='progress_section'>
                <div><UsersAnalytics /></div>
                <div><AccountSubscription /></div>
                <div><WeeklySales /></div>
            </div>
            <div className='graph_section'>
                <TotalRevenueChart />
                <WeeklySalesChart />
            </div>
        </DashboardSection >
    )
}
const DashboardSection = styled.section`
    color:${p => p.theme.pure};
    padding:20px;
    .top_section{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        @media (max-width:1024px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width:450px){
            grid-template-columns: 1fr;
        }
        > div{
            background-color:${p => p.theme.paper};
            padding: 40px 24px;
            border-radius: 10px;
            border: 1px solid;
            border-color :  ${p => rgba(p.theme.pure, 0.2)};
            text-align: center;
            .title {
                svg {
                border-radius: 50%;
                background: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%);
                padding: 14px;
                font-size: 28px;
                aspect-ratio: 1;
                }
                h2{
                    font-weight:600;
                    color : ${p => rgba(p.theme.pure, 0.6)};
                    font-size: 18px;
                }
               
            }
            h1.price{
                color : ${p => rgba(p.theme.pure, 0.6)};
                font-size: 34px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: center;
            }
            .price svg {
                font-size: 20px;
            }
            p{
                color : ${p => rgba(p.theme.pure, 0.4)};
                font-weight: 600;
            }
        }
    }
    .progress_section {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 20px;
        margin-top: 20px;
    }
    .progress_section >div:nth-child(2){
        grid-row-start: 2;
    }
    .progress_section >div:nth-child(3){
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .graph_section{
        display: grid;
        width: 100%;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
        margin: 20px 0px 0px 0px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    }
`
const Heading = styled.div`

  .content{
    svg {
        font-size: 28px;
        padding: 18px;
        background: ${p => rgba(p.theme.pure, 0.2)};
        color:${p => p.theme.primary};
        border-radius: 10px;
    }
    h1{
        font-size: 28px;
        font-weight: 600;
        color:${p => rgba(p.theme.pure, 0.8)};
        line-height: initial;
    }
    p{
        color:${p => rgba(p.theme.pure, 0.6)};
        font-weight: 600;
    }
  }  
`