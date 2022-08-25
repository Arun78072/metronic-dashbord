import React from 'react'
import styled, { useTheme } from 'styled-components'
import ProgressBar from '../progressBar'
import { rgba } from 'polished'
export default function DeliveriesOrder() {
    const theme = useTheme()
    return (
        <OrderSection theme={theme}>
            <div>
                <div className='heading_section flex justify-between items-center'>
                    <div>
                        <h1>Deliveries</h1>
                        <h2>Total deliveries to date</h2>
                    </div>
                    <h4>23,594</h4>
                </div>
                <ProgressBar color='#ff1943' percentage={60} />
                <div className="target_value flex justify-between mt-2">
                    <h4>Target</h4>
                    <h4>100%</h4>
                </div>
            </div>
            <div>
                <div className='heading_section flex justify-between items-center'>
                    <div>
                        <h1>Orders</h1>
                        <h2>Total orders to date</h2>
                    </div>
                    <h4>$12,346</h4>
                </div>
                <ProgressBar />
                <div className="target_value flex justify-between mt-2">
                    <h4>Target</h4>
                    <h4>100%</h4>
                </div>
            </div>
        </OrderSection>
    )
}
const OrderSection = styled.section`
    
    background:${p => p.theme.paper};
    border-radius: 10px;
    border: 1px solid;
    border-color:  ${p => rgba(p.theme.pure, 0.2)};
    display:flex;
    &> div{
        flex:1;
        padding: 20px;
    }
    & > div:first-child{
        border:1px solid;
        border-width:0px 1px 0px 0px;
        border-color: ${p => rgba(p.theme.pure, 0.2)};
    }
    .heading_section {
            margin-bottom:20px; 
        h2 {
            color:${props => rgba(props.theme.pure, 0.4)};
        }
        h1{
            font-weight: 600;
            color:${props => rgba(props.theme.pure, 0.8)};
            font-size:20px;
        }
        h4 {
            color:${p => p.theme.danger};
            font-size: 30px;
            font-weight: 600;
        }
    }
    .target_value{
        h4{
            color:${props => rgba(props.theme.pure, 0.4)};
        }
    }
`

