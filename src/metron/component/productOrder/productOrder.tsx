import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function ProductOrder() {
    const theme = useTheme()
    return (
        <TabelSection theme={theme}>
            <div className='main_section'>
                <div className='filter_section flex items-center justify-between'>
                    <div className='left_heading'>
                        <h1>Project Spendings</h1>
                        <p>Total $260,300 spent so far</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div>
                            <select name="category" id="category">
                                <option value="all">All time</option>
                                <option value="year">This Year</option>
                                <option value="month">This Month</option>
                                <option value="last">Last Month</option>
                            </select>
                        </div>
                        <div>
                            <select name="Status" id="Status">
                                <option value="all">All Order</option>
                                <option value="Approved">Approved</option>
                                <option value="Declined">Declined</option>
                                <option value="Progress">In Progress</option>
                                <option value="Transit">In Transit</option>
                            </select>
                        </div>
                        <div className='search_box'>
                            <span className="search_icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <input type='text' placeholder='Search Orders' />
                        </div>
                    </div>
                </div>


                {/* Table Data  */}


                <table >
                    <tr>
                        <th>Manager</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                    {Order.map((i, ix) => {
                        return (
                            <tr key={ix} className="table_data">
                                <td>
                                    <div className="user_details flex items-center gap-3">
                                        <img src={i.profile} alt={i.Name} />
                                        <div>
                                            <h2>{i.Name}</h2>
                                            <h3>{i.mail}</h3>
                                        </div>
                                    </div>
                                </td>
                                <td className='date'>{i.Date}</td>
                                <td className='amount'>${i.Amount}</td>
                                <td className='status'><h3 className={i.status}>{i.status}</h3></td>
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
padding:20px;
@media (max-width:450px){
        padding: 10px;
    }
.main_section{
    background:${props => props.theme.paper};
    color:${props => rgba(props.theme.pure, 0.6)};
    padding: 30px;
    border-radius: 10px;
    @media (max-width:450px){
        padding: 10px;
    }
}
table{
    width:100%;
    color:${props => rgba(props.theme.pure, 0.6)};
}
.filter_section {
    @media (max-width:450px){
        flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    }
}
.filter_section select , .search_box input[type="text"]{
    background: ${p => rgba(p.theme.base, 0.6)};
    font-size: 14px;
    padding: 6px 8px;
    border-radius: 6px;
    width: 100%;
}
.search_box input[type="text"]{
    padding: 6px 8px 6px 24px;
    position:relative;
}
.search_box{
    position:relative;
}
span.search_icon {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
}
.filter_section{
    margin-bottom:30px;
}
tr {
    text-align: left;
    border: dashed;
    border-width: 0px 0px 1px;
    border-color:${props => rgba(props.theme.pure, 0.1)};
}
th{
    text-transform:uppercase;
    padding: 12px 0px;
    font-size:12px;
    color:${props => rgba(props.theme.pure, 0.4)};
    font-weight: 600;
}
td {
    padding: 10px 0px;
}
.user_details img {
    max-width: 36px;
    border-radius: 50%;
}
.user_details h2 {
    color:${props => rgba(props.theme.pure, 0.8)};
    font-weight:600;
}
.user_details h3 {
    color:${props => rgba(props.theme.pure, 0.4)};
    font-weight:400;
    font-size: 14px;
}
.table_data .date , .table_data .amount{
    color:${props => props.theme.pure};
    font-weight: 700;
    font-size: 14px;
}
.view_btn a {
    padding: 10px 20px;
    background: ${props => rgba(props.theme.pure, 0.1)};
    color:${props => rgba(props.theme.pure, 0.9)};
    border-radius: 6px;
    font-size: 14px;
}
td.view_btn {
    text-align: right;
    width: 90px;
}
.left_heading h1 {
    font-size: 20px;
    font-weight: 600;
    color:${props => rgba(props.theme.pure, 1)};
}
.left_heading p{
    color:${props => rgba(props.theme.pure, 0.3)};
    font-size: 14px;
}
.status h3 {
    width: fit-content;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
}
.status h3.Pending{
    background:${props => rgba(props.theme.warning_light, 0.2)};
    color:${props => rgba(props.theme.warning_light, 1)};
}
.status h3.Approved{
    background:${props => rgba(props.theme.success, 0.2)};
    color:${props => rgba(props.theme.success, 1)};
}
.status h3.In.progress{
    background:${props => rgba(props.theme.info, 0.2)};
    color:${props => rgba(props.theme.info, 1)};
}
.status h3.Rejected{
    background:${props => rgba(props.theme.danger, 0.2)};
    color:${props => rgba(props.theme.danger, 1)};
}
`
const Order = [
    {
        id: 1,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Pending',
        Details: '#'
    },
    {
        id: 2,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Approved',
        Details: '#'
    },
    {
        id: 3,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'In progress',
        Details: '#'
    },
    {
        id: 4,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Rejected',
        Details: '#'
    },
    {
        id: 5,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Pending',
        Details: '#'
    },
    {
        id: 6,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Approved',
        Details: '#'
    },
    {
        id: 7,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'In progress',
        Details: '#'
    },
    {
        id: 8,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Rejected',
        Details: '#'
    },
    {
        id: 9,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Pending',
        Details: '#'
    },
    {
        id: 10,
        Name: 'Emma Smith',
        mail: 'smith@kpmg.com',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Date: 'Nov 10, 2022',
        Amount: '630.00',
        status: 'Rejected',
        Details: '#'
    },
]