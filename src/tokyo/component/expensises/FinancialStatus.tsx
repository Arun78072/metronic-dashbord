
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import IncomeChart from './Charts/IncomeChart';

export default function FinancialStatus() {
    const theme = useTheme()
    return (
        <OrderData theme={theme}>
            <div>
                <div className='section_box' >
                    <div>
                        <div className='heading_section flex justify-between items-center'>
                            <div>
                                <h1>$32,865</h1>
                                <h2>Income</h2>
                            </div>
                            <span><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                        </div>
                        <div className='chart_section'>
                            <IncomeChart />
                        </div>

                    </div>
                </div>
                <div className='section_box' >
                    <div>
                        <div className='heading_section flex justify-between items-center'>
                            <div>
                                <h1>$32,865</h1>
                                <h2>Income</h2>
                            </div>
                            <span><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                        </div>
                        <div className='chart_section'>
                            <IncomeChart />
                        </div>

                    </div>
                </div>
            </div>
            <div>
                egf
            </div>
        </OrderData >
    )
}

const OrderData = styled.section`
    display:grid;
    grid-template-columns:3fr 4fr;
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
                font-size: 24px;
            }
        }
        

}

`