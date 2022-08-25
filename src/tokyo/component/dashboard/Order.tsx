import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import ProgressBar from '../progressBar'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Order() {
    const [data, setData] = useState(Dataa)
    const theme = useTheme()


    console.log('dataaa', data)
    return (
        <OrderSection theme={theme}>
            <img src='https://tokyo-black-nextjs.bloomui.com/static/images/placeholders/covers/1.jpg' className='image_section' />
            <span className='live_span'>LIVE TRANSATIONS</span>
            <div className='table_section'>
                <table >
                    <tr>
                        <td>Order</td>
                        <td className='status'>Status</td>
                        <td className='text-right'>Actions </td>
                    </tr>
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
                                <td className='status'>
                                    <h2>{i.Status_id}</h2>
                                    <h3 className={i.status === 'Deposit' ? 'deposit' : i.status === 'Processing' ? 'processing' : i.status === 'Withdrawal' ? 'withdrawal' : i.status === 'Pending' ? 'pending' : ''}><FiberManualRecordIcon />{i.status}</h3>
                                </td>
                                <td className='view_btn'><button><CloseIcon /></button></td>
                            </tr>
                        )
                    })}
                </table>
            </div >
        </OrderSection>
    )
}
const OrderSection = styled.section`
    background:${p => p.theme.paper};
    border-radius: 10px;
    border: 1px solid;
    border-color:  ${p => rgba(p.theme.pure, 0.2)};
    overflow: hidden;
    color: ${p => rgba(p.theme.pure, 0.8)};
    position:relative;
    span.live_span {
        position: absolute;
        top: 10px;
        z-index: 9999;
        right: 16px;
        background: ${p => p.theme.primary};
        padding: 0px 12px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
    }
    .table_section{
        padding: 30px;
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
            .status{    
                    font-weight: 600;
                    text-align: right;
                    h3{
                        font-weight: 400;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        gap: 2px;
                        svg{
                            font-size: 12px;
                        }
                    }
                    h3.deposit{
                        color:#ff1943; 
                    }
                    h3.processing{
                        color:#33c2ff; 
                    }
                    h3.withdrawal{
                        color:#ffa319; 
                    }
                    h3.pending{
                        color:#57ca22; 
                    }
                }
                td.view_btn {
                    text-align: right;
                    width: 90px;
                    color:#ff1943; 
                }
            }
    }

`
const Dataa = [
    {
        id: 1,
        transaction: 'Paypal Withdraw',
        time: 'August 24 2022',
        logo: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg',
        status: 'Deposit',
        Status_id: ' 39FJDSHE84H',

    },
    {
        id: 2,
        transaction: 'Incoming funds',
        time: 'August 24 2022',
        logo: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        status: 'Processing',
        Status_id: ' 39FJDSHE84H',

    },
    {
        id: 3,
        transaction: 'Held funds   ',
        time: 'August 24 2022',
        logo: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg',
        status: 'Withdrawal',
        Status_id: ' 39FJDSHE84H',

    },
    {
        id: 4,
        transaction: 'Fiat deposit',
        time: 'August 24 2022',
        logo: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        status: 'Pending',
        Status_id: ' 39FJDSHE84H',

    },

]