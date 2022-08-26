import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom'

import { SecandaryButton } from '../../../component/Buttons'
export default function NavigationPills() {
    const theme = useTheme()
    return (
        <TabelSection theme={theme}>
            <div className='heading_section flex justify-between items-center'>
                <div>
                    <h1>Navigation Pills</h1>
                    <h2>This is yet another example for navigation</h2>
                </div>
                <SecandaryButton>View all</SecandaryButton>
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

                                <td className='view_btn'><a href={i.Details}>View</a></td>
                            </tr>
                        )
                    })}
                </table>
            </div >
            <div className='text-center my-[20px]'><SecandaryButton>VIEW MORE ITEMS</SecandaryButton></div>
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
}
.table_section{
    padding: 30px;
    height: 330px;
    overflow-y: scroll;
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
       
    }
   
    .user_details{
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
        }
        span{
            color: ${p => p.theme.primary};
            font-weight:500;
            }
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