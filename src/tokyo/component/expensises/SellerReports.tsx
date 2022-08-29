import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import SellerChart from './Charts/SellerChart'
export default function SellerReports() {
  return (
    <ReportSection>
      <div className='heading_section'>
        <h2>Top sellers</h2>
        <button>View all</button>
      </div>
      <div className='chart_section'>
        <SellerChart />
      </div>
      {/* Top seller  */}
      <div className='top_seller'>
        <h1>TOP SELLERS</h1>
        <div>
          {Data.map((i) => {
            return (
              <div key={i.id} className='team_box flex items-center gap-5 p-5'>
                <span>{i.logo}</span>
                <div className='flex-1'>
                  <h1>{i.name}</h1>
                  <div className='status flex items-center justify-between'>
                    <h3>{i.status}</h3>
                    <h4 className='total'>${i.total}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </ReportSection>
  )
}
const ReportSection = styled.section`
  margin-top: 20px;
  background:${p => p.theme.paper};
  border-radius: 10px;
  border: 1px solid;
  border-color :  ${p => rgba(p.theme.pure, 0.2)};
  color:${p => rgba(p.theme.pure, 0.6)};
  .heading_section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;
    border: 1px solid  ${p => rgba(p.theme.pure, 0.2)};
    border-width:0px 0px 1px 0px;
    h2{
      font-weight:600;
      color:${props => rgba(props.theme.pure, 9)};
      font-size:20px;
    }
    button{
      color:${props => rgba(props.theme.primary, 9)};
    }
  }
  .top_seller{
    padding:20px;
    h1{
      font-weight:600;

    }
    .team_box{
        background:${p => p.theme.paper};
        transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        h1 {
            font-weight: 600;
            font-size: 18px;
            color:${p => rgba(p.theme.pure, 0.9)};
        }
        span {
            background: #ff6a00;
            padding: 20px;
            border-radius: 50%;
        }
        h4.total {
            font-size: 16px;
            font-weight: 600;
        }
    }
    }
`

const Data = [
  {
    id: 1,
    name: 'Shanelle Wynn',
    logo: 'GA',
    status: ' confirmed sales',
    percentage: 80,
    total: 658,
  },
  {
    id: 2,
    name: 'Shanelle Wynn',
    logo: 'GA',
    status: ' confirmed sales',
    percentage: 80,
    total: 658,
  },
  {
    id: 3,
    name: 'Shanelle Wynn',
    logo: 'GA',
    status: ' confirmed sales',
    percentage: 80,
    total: 658,
  },
]