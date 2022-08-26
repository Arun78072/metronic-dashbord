import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../progressBar'
import SplineChart from '../charts/SplineChart'
import { Link } from 'react-router-dom';
import LineChart from '../charts/LineChart';

export default function WeeklySales2() {
    const [data, setData] = useState(Dataa)
    const theme = useTheme()

    return (
        <OrderData theme={theme}>
            <div className='section_box' >
                <div>
                    <div className='heading_section flex justify-between items-center'>
                        <div>
                            <h1>Weekly sales</h1>
                            <h2>Reports for what we sold this week</h2>
                        </div>
                        <span><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                    </div>
                    <div className='chart_section'>
                        <SplineChart />
                    </div>
                    <div className='table_section'>
                        <table >

                            {data.map((i, ix) => {
                                return (
                                    <tr key={ix} className="table_data">
                                        <td>
                                            <div className="user_details flex items-center gap-3">
                                                <img src={i.logo} alt={i.transaction} />
                                                <div>
                                                    <h2>{i.transaction}</h2>
                                                    <h3>{i.time}</h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='view_btn'><a href='#'>View</a></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div >
                </div>
            </div>
            <div className='table_statics'>
                <div className='total_orders'>
                    <h1>789</h1>
                    <h2>Total Orders</h2>
                    <Link to='' className='view_all'>View all</Link>
                    <div>
                        <LineChart />
                    </div>
                </div>
                <div className='total_visitors'>

                    <h1>576</h1>
                    <h2>Total Visitors</h2>
                    <div>
                        <LineChart />
                    </div>
                </div>
                <div className='total_deliveries'>
                    <h1>183,954</h1>
                    <h2>Total Deliveries</h2>
                    <div>
                        <LineChart />
                    </div>
                </div>
                <div className='total_budget'>
                    <h1>$13,253</h1>
                    <h2>Total Budget</h2>
                    <div>
                        <LineChart />
                    </div>
                </div>
            </div>

        </OrderData >
    )
}

const OrderData = styled.section`
    display: grid;
    grid-template-columns: 3fr 4fr;
    gap: 20px;
    margin-top: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
.section_box{
        background:${props => props.theme.paper};
        color:${props => rgba(props.theme.pure, 0.6)};
        border-radius: 10px;
        height:100%;
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
                font-size: 24px;
            }
        }
        .table_section{
                padding: 0px 30px;
                @media (max-width:450px){
            padding: 10px;
        }
        table{
                width:100%;
                color:${props => rgba(props.theme.pure, 0.6)};
                td {
                    padding: 10px;
                    
                }
                .user_details{
                    img {
                        max-width: 46px;
                        border-radius: 50%;
                    }
                    h2 {
                        color:${props => rgba(props.theme.pure, 0.8)};
                        font-weight:600;
                        font-size: 16px;
                    }
                    h3 {
                        color:${props => rgba(props.theme.pure, 0.6)};
                        font-weight:400;
                        font-size: 14px;
                    }
                }
                .view_btn a {
                    padding: 6px 14px;
                    background: ${props => rgba(props.theme.pure, 0.1)};
                    color:${props => rgba(props.theme.pure, 0.6)};
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 600;
                }
                td.view_btn {
                    text-align: right;
                    width: 90px;
                }
            }
}

}
.table_statics{
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    gap: 20px;
    @media (max-width:450px) {
        grid-template-columns:1fr;
    }
    & > div {
        border-radius: 10px;
        height:100%;
        border: 1px solid;
        border-color :  ${p => rgba(p.theme.pure, 0.2)};
        padding: 20px;
        position:relative;
        background:${props => props.theme.paper};
        h1 {
            font-size: 32px;
            font-weight: 600;
            color:${props => rgba(props.theme.pure, 0.8)};
        }
        h2 {
            font-size: 20px;
        }
        a.view_all {
            position: absolute;
            top: 20px;
            right: 20px;
            border: 1px solid;
            border-color: ${p => p.theme.primary};
            padding: 4px 10px;
            border-radius: 8px;
            color: ${p => p.theme.primary};
            font-size: 14px;
        }
    }
    .total_visitors{
        background:linear-gradient(-20deg, rgb(43, 88, 118) 0%, rgb(78, 67, 118) 100%);
    }
    .total_deliveries{
        background:${p => p.theme.danger}
    }
    .total_budget{
        background:${p => p.theme.success}
    }
}




`







const Dataa = [
    {
        id: 1,
        transaction: 'Paypal Withdraw',
        time: 'August 24 2022',
        logo: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg',
    },
    {
        id: 2,
        transaction: 'Incoming funds',
        time: 'August 24 2022',
        logo: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
    },
    {
        id: 3,
        transaction: 'Held funds   ',
        time: 'August 24 2022',
        logo: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg',
    },
    {
        id: 4,
        transaction: 'Fiat deposit',
        time: 'August 24 2022',
        logo: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
    },

]