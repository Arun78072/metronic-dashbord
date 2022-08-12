import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'

export default function ProductOrder(){
    const theme = useTheme()
    console.log('arrary',Order)
return(
  <TabelSection theme={theme}>
    <div className='main_section'>
    <div className='flex items-center justify-between filter_section'>
        <div>
            <h1>Product Order</h1>
            <p>Avg 57 order per day </p>
        </div>
            <div>
                <label htmlFor="category">category</label>
                <select name="category" id="category">
                <option value="all">Show All</option>
                <option value="categorya">Category A</option>
                <option value="categoryb">Category B</option>
                </select>
            </div>
            <div>
                <label htmlFor="Status">Status</label>
                <select name="Status" id="Status">
                <option value="all">Show All</option>
                <option value="categorya">Category A</option>
                <option value="categoryb">Category B</option>
                </select>
            </div>
        
        <div>
            <input type='text' placeholder='Search...' />
        </div>
    </div>
        <table >
            <tr>
                <th>Order id</th>
                <th>Created</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Profit</th>
                <th>Status</th>
                <th></th>
            </tr>
            {Order.map((i , ix)=>{
                return(
                    <tr key={ix}>
                    <td>{i.order}</td>
                    <td>{i.created}</td>
                    <td>{i.customer}</td>
                    <td>{i.total}</td>
                    <td>{i.profit}</td>
                    <td>{i.status}</td>
                    <td><button>+</button></td>
                </tr>
                )
            })}
        </table>
    </div>
    </TabelSection>
)
}
const TabelSection = styled.section`
padding:20px;
.main_section{
    background:${props => props.theme.paper};
color:${props => rgba(props.theme.pure, 0.6)};
padding: 10px;
    border-radius: 10px;
}
table{
    width:100%;
    color:${props => rgba(props.theme.pure, 0.6)};
}
.filter_section select{
    background: transparent;
}
tr {
    text-align: left;
    border: dashed;
    border-width: 0px 0px 1px;
}
th{
    text-transform:uppercase;
    padding: 12px 0px;
}
td {
    padding: 6px 0px;
}
`

const Order = [
    {
        id:1,
        order : '#XGY-346',
        created : 'Time',
        customer : 'Albert Flores',
        total : '630.00',
        profit: '86.20',
        status : 'Pending'
    },
    {
        id:2,
        order : '#XGY-346',
        created : 'Time',
        customer : 'Albert Flores',
        total : '630.00',
        profit: '86.20',
        status : 'Pending'
    },
    {
        id:3,
        order : '#XGY-346',
        created : 'Time',
        customer : 'Albert Flores',
        total : '630.00',
        profit: '86.20',
        status : 'Pending'
    },
    {
        id:4,
        order : '#XGY-346',
        created : 'Time',
        customer : 'Albert Flores',
        total : '630.00',
        profit: '86.20',
        status : 'Pending'
    },
    {
        id:5,
        order : '#XGY-346',
        created : 'Time',
        customer : 'Albert Flores',
        total : '630.00',
        profit: '86.20',
        status : 'Pending'
    },
    {
        id:6,
        order : '#XGY-346',
        created : 'Time',
        customer : 'Albert Flores',
        total : '630.00',
        profit: '86.20',
        status : 'Pending'
    },
]