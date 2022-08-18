import React from 'react'
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { SecandaryButton } from '../../../component/Buttons'
import { Link } from 'react-router-dom'
export default function Logs() {
    const theme = useTheme()
    return (
        <LogSection theme={theme}>
            <div className="flex justify-between items-center heading_section">
                <h1 className="text-[20px] font-semibold">Login Sessions</h1>
                <SecandaryButton><Link to='/edit/emma'>View All</Link></SecandaryButton>

            </div>
            <table className='sessions_table'>
                <tr>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Device</th>
                    <th>IP Address</th>
                    <th>Time</th>
                </tr>
                {sessions.map((i, ix) => {
                    return (
                        <tr key={ix} className="table_data">

                            <td className=''>{i.Location}</td>
                            <td className='status'><h3 className={i.Status}>{i.Status}</h3></td>
                            <td className=''>{i.Device}</td>
                            <td className=''>{i.IP}</td>
                            <td className=''>{i.Time} ago</td>
                        </tr>
                    )
                })}
            </table>
        </LogSection>
    )
}
const LogSection = styled.section`
 .heading_section{
        border: solid;
        border-width:0px 0px 1px 0px;
        padding-bottom: 20px;
        border-color:${p => rgba(p.theme.pure, 0.2)};
    }
table.sessions_table{
    width:100%;
}
    tr {
    text-align: left;
    border: dashed;
    border-width: 0px 0px 1px;
    border-color:${props => rgba(props.theme.pure, 0.1)};
}
th{
    padding: 12px 0px;
    font-size:16px;
    color:${props => rgba(props.theme.pure, 1)};
    font-weight: 600;
}
td {
    padding: 10px 0px;
    color:${props => rgba(props.theme.pure, 0.4)};
    font-size:14px;
}
.status h3 {
    width: fit-content;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 600;
    text-transform: uppercase;
}
.status h3.wrn{
    background:${props => rgba(props.theme.warning_light, 0.2)};
    color:${props => rgba(props.theme.warning_light, 1)};
}
.status h3.ok{
    background:${props => rgba(props.theme.success, 0.2)};
    color:${props => rgba(props.theme.success, 1)};
}
.status h3.info{
    background:${props => rgba(props.theme.info, 0.2)};
    color:${props => rgba(props.theme.info, 1)};
}
.status h3.err{
    background:${props => rgba(props.theme.danger, 0.2)};
    color:${props => rgba(props.theme.danger, 1)};
}
`

const sessions = [
    {
        id: 1,
        Location: 'USA(5)',
        Status: 'ok',
        Device: 'Chrome - Windows',
        IP: '236.125.56.78',
        Time: '	2 mins',
    },
    {
        id: 2,
        Location: 'USA(5)',
        Status: 'wrn',
        Device: 'Chrome - Windows',
        IP: '236.125.56.78',
        Time: '	2 mins',
    },
    {
        id: 3,
        Location: 'USA(5)',
        Status: 'err',
        Device: 'Chrome - Windows',
        IP: '236.125.56.78',
        Time: '	2 mins',
    },
    {
        id: 4,
        Location: 'USA(5)',
        Status: 'info',
        Device: 'Chrome - Windows',
        IP: '236.125.56.78',
        Time: '	2 mins',
    },
]