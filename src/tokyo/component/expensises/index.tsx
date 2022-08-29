import React from 'react'
import styled, { useTheme } from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { rgba } from 'polished'
import FinancialStatus from './FinancialStatus';
import WeeklySales from './WeeklySales';
import SaleMeter from './SaleMeter';
import SocialProfile from './SocialProfile';
import TeamPerformance from './TeamPerformance';
import MessengerWindow from './MessengerWindow';
import SellerReports from './SellerReports';
export default function Expenses() {
    return (
        <ExpensesSection>
            <Heading className='flex items-center justify-between pb-5'>
                <div className='content flex gap-4 items-center'>
                    <AccountBalanceOutlinedIcon />
                    <span>
                        <h1>Expenses</h1>
                        <p>Dashboard to show the company expenses statistics</p>
                    </span>
                </div>
                <div>
                    <ArrowForwardIcon />
                </div>
            </Heading>


            {/* <div>
                <FinancialStatus />
            </div> */}

            <div>
                <WeeklySales />
            </div>


            <div>
                <SaleMeter />
            </div>


            <div>
                <SellerReports />
            </div>

            <div className='grid_section'>
                <TeamPerformance />
                <MessengerWindow />
            </div>

            {/* Social profile section */}
            <div>
                <SocialProfile />
            </div>

        </ExpensesSection>
    )
}

const ExpensesSection = styled.section`
    padding:30px;
.grid_section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
}
`
const Heading = styled.div`
@media (max-width: 450px){
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}
& > div:nth-child(2) svg{
    color:${p => p.theme.primary};
}
  .content{
    svg {
        font-size: 72px;
        padding: 18px;
        background: ${p => rgba(p.theme.pure, 0.1)};
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