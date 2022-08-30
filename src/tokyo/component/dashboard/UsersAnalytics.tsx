import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom'
import ProgressBar from '../progressBar'
export default function UsersAnalytics() {
    const theme = useTheme()
    return (
        <TabelSection theme={theme}>
            <div className='heading_section flex justify-between items-center'>
                <div>
                    <h2> PROGRESS</h2>
                    <h1>Users Analytics</h1>
                </div>
                <h4>Pending</h4>
            </div>
            <div className='table_section'>
                <table >
                    {Order.map((i, ix) => {
                        return (
                            <tr key={ix} className="table_data">
                                <td>
                                    <div className="user_details flex items-center gap-3">
                                        <img src={i.profile} alt={i.Name} />
                                        <div>
                                            <h2>{i.Name}</h2>
                                            <h3>{i.designation} <span><Link to={i.Locationlink}>{i.location}</Link></span></h3>
                                        </div>
                                    </div>
                                </td>
                                <td className='progress_bar'><ProgressBar percentage={i.Percentage} /></td>
                                <td className='amount'>+{i.Percentage}%</td>
                                <td className='view_btn'><a href={i.Details}>View</a></td>
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
        font-weight: 700;
        color:${props => rgba(props.theme.pure, 0.4)};
    }
    h1{
        font-weight: 600;
        color:${props => rgba(props.theme.pure, 0.8)};
        font-size:18px;
    }
    h4 {
        background: ${props => rgba(props.theme.pure, 0.6)};
        color:${props => rgba(props.theme.base, 0.8)};
        font-size: 11px;
        padding: 4px 12px;
        border-radius: 10px;
        text-transform: uppercase;
        
    }
}
.table_section{
    padding: 30px;
    @media (max-width:450px){
        padding: 10px;
        
    }

    table{
    width:100%;
    color:${props => rgba(props.theme.pure, 0.6)};
    tr {
        text-align: left;
        border: dashed;
        border-width: 0px 0px 1px;
        border-color:${props => rgba(props.theme.pure, 0.1)};
    }
    td {
        padding: 10px;
        .progress_bar {
        width: 80px;
    }
    }
    td.progress_bar {
        min-width: 90px;
    }
    .user_details{
        @media (max-width:450px){
            flex-direction: column;
            align-items: self-start;
            width: 126px;
        }
        img {
            max-width: 46px;
            border-radius: 50%;
        }
        h2 {
            color:${props => rgba(props.theme.pure, 0.8)};
            font-weight:600;
            font-size: 18px;
        }
        h3 {
            color:${props => rgba(props.theme.pure, 0.4)};
            font-weight:400;
            font-size: 18px;
            text-transform: capitalize;
            @media (max-width:450px){
                white-space: nowrap;
                text-overflow: ellipsis;
            }  
        }
        span{
            color: ${p => p.theme.primary};
            font-weight:500;
            }
    }
   .amount{
        color:${props => props.theme.pure};
        font-weight: 700;
        font-size: 14px;
    }
    .view_btn a {
        padding: 6px 14px;
        background: ${props => rgba(props.theme.primary, 0.1)};
        color:${props => rgba(props.theme.primary, 0.9)};
        border-radius: 6px;
        font-size: 14px;
    }
    td.view_btn {
        text-align: right;
        width: 90px;
    }
}

}
`
const Order = [
    {
        id: 1,
        Name: 'Gunilla Canario',
        designation: 'senior cost accountant at',
        profile: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg',
        Locationlink: '#',
        location: 'Tokyo',
        Percentage: 23,
        Details: '#'
    },
    {
        id: 2,
        Name: 'Emma Smith',
        designation: 'Associate Professor at',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Locationlink: '#',
        location: 'Buzzdog',
        Percentage: 13,

        Details: '#'
    },
    {
        id: 3,
        Name: 'Rowena Geistmann',
        designation: 'Pharmacist at ',
        profile: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg',
        Locationlink: '#',
        location: 'Yozio',
        Percentage: 20,
        Details: '#'
    },
    {
        id: 4,
        Name: 'Emma Smith',
        designation: 'senior cost accountant at',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Locationlink: '#',
        location: 'Tokyo',
        Percentage: 80,
        Details: '#'
    },
    {
        id: 5,
        Name: 'Emma Smith',
        designation: 'senior cost accountant at',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Locationlink: '#',
        location: 'Tokyo',
        Percentage: 63,
        Details: '#'
    },

]