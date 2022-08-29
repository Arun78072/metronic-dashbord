import React from 'react'
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function SaleMeter() {
    const theme = useTheme()
    return (
        <MeterSection theme={theme}>


            <div className='meter_box weekly'>
                <div className='flex justify-between items-center'><h1>Weekly Sales</h1> <h2>$43,346.45</h2></div>
                <div>meter</div>
                <div>
                    <h3><span><KeyboardArrowDownIcon /></span>+ 58.3%</h3>
                    <p>You had a 58% increase in sales during the last 7 days. Keep up the good work!</p>
                </div>
            </div>


            <div className='meter_box visitors'>
                <div className='flex justify-between  items-center'><h1>Weekly Sales</h1> <h2>$43,346.45</h2></div>
                <div>meter</div>
                <div>
                    <h3><span><KeyboardArrowDownIcon /></span>+ 58.3%</h3>
                    <p>You had a 58% increase in sales during the last 7 days. Keep up the good work!</p>
                </div>
            </div>

            <div className='meter_box expenses'>
                <div className='flex justify-between items-center'><h1>Weekly Sales</h1> <h2>$43,346.45</h2></div>
                <div>meter</div>
                <div>
                    <h3><span><KeyboardArrowUpIcon /></span>+ 58.3%</h3>
                    <p>You had a 58% increase in sales during the last 7 days. Keep up the good work!</p>
                </div>
            </div>


        </MeterSection>

    )
}
const MeterSection = styled.section`
margin-top:20px;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    gap:20px;
    .meter_box {
        padding: 20px;
        background:${props => props.theme.paper};
        color:${props => rgba(props.theme.pure, 0.6)};
        border-radius: 10px;
        border: 1px solid;
        border-color :  ${p => rgba(p.theme.pure, 0.2)};
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        h1{
            font-size: 18px;
            font-weight: 600;
            color:${props => rgba(props.theme.pure, 0.9)};
        }
        h2{
            font-weight: 600;
            font-size: 18px;
        }
        span svg {
            border-radius: 6px;
            margin-right: 8px;
        }
        p {
            margin-top: 14px;
            color:${props => rgba(props.theme.pure, 0.4)};
        }
        &.weekly {
            h2 , h3{
                color:${props => rgba(props.theme.success, 0.9)};
            }
            span svg{
                background: ${props => rgba(props.theme.success, 0.1)};
                color:${props => rgba(props.theme.success, 1)};
            }
        }
        &.visitors {
            h2 , h3{
                color:${props => rgba(props.theme.warning_light, 0.9)};
            }
            span svg{
                background: ${props => rgba(props.theme.warning_light, 0.1)};
                color:${props => rgba(props.theme.warning_light, 1)};
            }
        }
        &.expenses {
            h2 , h3{
                color:${props => rgba(props.theme.danger, 0.9)};
            }
            span svg{
                background: ${props => rgba(props.theme.danger, 0.1)};
                color:${props => rgba(props.theme.danger, 1)};
            }
        }
    }
    .meter_box:hover{
        box-shadow: rgb(203 204 210 / 5%) 0px 0.56875rem 3.3rem, rgb(203 204 210 / 7%) 0px 0.9975rem 2.4rem, rgb(203 204 210 / 10%) 0px 0.35rem 1rem, rgb(203 204 210 / 15%) 0px 0.225rem 0.8rem;
    }
`