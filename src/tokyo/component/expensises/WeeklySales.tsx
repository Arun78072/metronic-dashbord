import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
export default function WeeklySales() {
    const theme = useTheme()
    return (
        <TabelSection theme={theme}>
            <div className='heading_section flex justify-between items-center'>
                <div>
                    <h1>Weekly sales</h1>
                    <h2>Reports for what we sold this week</h2>
                </div>
                <span><FontAwesomeIcon icon={faEllipsisVertical} /></span>
            </div>
            <div className='table_section'>
                <table >
                    <tr>
                        <th>Employee</th>
                        <th>Income</th>
                        <th>Expenses</th>
                        <th>Status</th>
                        <th>Trends</th>
                        <th>Totals</th>
                    </tr>
                    {Order.map((i, ix) => {
                        return (
                            <tr key={ix} className="table_data">
                                <td>
                                    <div className="user_details">
                                        <h2>{i.Name}</h2>
                                        <h3>{i.designation}</h3>
                                    </div>
                                </td>
                                <td>{i.Income}</td>
                                <td>{i.Expenses}</td>
                                <td className='status'><span className={i.Status}>{i.Status}</span></td>
                                <td>{i.Trends}</td>
                                <td>{i.Totals}</td>
                            </tr>
                        )
                    })}
                </table>
            </div >
        </TabelSection >
    )
}

const TabelSection = styled.section`
    background:${props => props.theme.paper};
    color:${props => rgba(props.theme.pure, 0.6)};
    border-radius: 10px;
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    @media (max-width:450px){
            padding: 0px;
        }
.heading_section {
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    border-width: 0px 0px 1px 0px;
    padding: 26px;
    h2 {
        color:${props => rgba(props.theme.pure, 0.4)};
    }
    h1{
        font-weight: 600;
        color:${props => rgba(props.theme.pure, 0.8)};
        font-size:18px;
    }
    h4 {
        background: ${props => rgba(props.theme.pure, 0.2)};
        color:${props => rgba(props.theme.pure, 0.8)};
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 15px;
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
        border-collapse: separate;
        border-spacing: 0px 30px;

        tr {
            text-align: left;  
        }
        tr.table_data {
            box-shadow: 0 0 0px 1px ${p => rgba(p.theme.pure, 0.2)};
            border-radius: 13px;
            cursor: pointer;
            overflow: hidden;
        }
        td {
            padding: 10px;
            font-weight:600;
        }
        td.status {
            span{
                
                padding: 4px 10px;
                border-radius: 10px;
                font-size: 12px;
                color: ${p => rgba(p.theme.pure, 1)};
                text-transform: uppercase;
            }
            .overdue{
                background: ${p => rgba(p.theme.danger, 0.9)};
            }
            .pending{
                background: ${p => rgba(p.theme.warning_light, 0.9)};
            }
            .done{
                background: ${p => rgba(p.theme.success, 0.9)};
            }
        }

        .user_details{
            h2 {
                font-weight:600;
                font-size: 18px;
                color:${p => p.theme.primary};
            }
            h3 {
                color:${props => rgba(props.theme.pure, 0.4)};
                font-weight:400;
                font-size: 18px;
                text-transform: capitalize;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            
        }
}

}
`
const Order = [
    {
        id: 1,
        Name: 'Inez Conley',
        designation: 'senior cost accountant at',
        Income: '$754',
        Expenses: '-$2,584',
        Status: 'overdue',
        Trends: 'Charts',
        Totals: '$68,492',
    },
    {
        id: 2,
        Name: 'Inez Conley',
        designation: 'senior cost accountant at',
        Income: '$754',
        Expenses: '-$2,584',
        Status: 'pending',
        Trends: 'Charts',
        Totals: '$68,492',
    },
    {
        id: 3,
        Name: 'Inez Conley',
        designation: 'senior cost accountant at',
        Income: '$754',
        Expenses: '-$2,584',
        Status: 'done',
        Trends: 'Charts',
        Totals: '$68,492',
    },
]