
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { TokyoSimpleButton } from '../buttons/PrimaryBtn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NorthIcon from '@mui/icons-material/North';
export default function UsersList() {
    const [data, setData] = useState(Dataa)
    const theme = useTheme()
    return (
        <IssueSection theme={theme}>
            <div className='issue_box'>
                <table >
                    <tr>
                        <td>Users list</td>
                        <td><TokyoSimpleButton>Export <KeyboardArrowDownIcon /></TokyoSimpleButton> </td>
                    </tr>
                    {data.map((i, ix) => {
                        return (
                            <tr key={ix} className="table_data">
                                <td>
                                    <div className="user_details flex items-center gap-3">
                                        <img src={i.logo} alt={i.title} />
                                        <div>
                                            <h2>{i.title}</h2>
                                            <h3>{i.description}</h3>
                                        </div>
                                    </div>
                                </td>
                                <td className='price'>{i.price} <NorthIcon /></td>
                            </tr>
                        )
                    })}
                </table>
            </div >
        </IssueSection >
    )
}

const IssueSection = styled.section`
    background:${props => props.theme.paper};
    color:${props => rgba(props.theme.pure, 0.6)};
    border-radius: 10px;
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    @media (max-width:450px){
            padding: 0px;
        }
.issue_box{  
    table{
        width:100%;
        color:${props => rgba(props.theme.pure, 0.6)};
        td {
            font-weight: 600;
            color:${props => rgba(props.theme.pure, 0.8)};
            font-size:18px;
            padding: 20px;
            }
        td.price {
            text-align: right;
            font-size: 30px;
        }
        tr{
            border: 1px solid;
            border-color :  ${p => rgba(p.theme.pure, 0.2)};
            border-width: 0px 0px 1px 0px;
            padding: 26px;
        }
        tr:last-child{
            border: none;
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
    }
}

`

const Dataa = [
    {
        id: 1,
        title: 'Reports',
        description: 'Monthly sales reports',
        logo: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg',
        price: 29.54,
    },
    {
        id: 2,
        title: 'User',
        description: 'Visitors last week',
        logo: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        price: 684,
    },


]