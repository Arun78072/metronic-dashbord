import ReactApexChart from 'react-apexcharts'
import styled, { useTheme } from 'styled-components'
export default function WeeklySalesChart() {
    const theme = useTheme()
    const config = {
        series: [260, 125, 54, 146],
        options: {
            labels: ['Social', 'Search Engines', 'Direct', 'Other'],

        },
    }
    return (
        <ChartSection theme={theme}>
            <h1 className='title'>Weekly Sales Chart</h1>
            <ReactApexChart options={config.options} series={config.series} type="donut" width="100%" />
            <div className='chart_table'>
                <table>
                    <tr>
                        <th>Source</th>
                        <th>Revenue</th>
                    </tr>
                    <tr>
                        <td>{config.options.labels[0]}</td>
                        <td>{config.series[0]}</td>
                    </tr>
                    <tr>
                        <td>{config.options.labels[1]}</td>
                        <td>{config.series[1]}</td>
                    </tr>
                    <tr>
                        <td>{config.options.labels[2]}</td>
                        <td>{config.series[2]}</td>
                    </tr>
                    <tr>
                        <td>{config.options.labels[3]}</td>
                        <td>{config.series[3]}</td>
                    </tr>
                </table>
            </div>
        </ChartSection>
    )
}
const ChartSection = styled.section`
    width:100%;
    background-color:${p => p.theme.paper} !important;
    padding: 10px;
    border-radius:10px;
    h1.title{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    .chart_table{
        margin-top: 30px;
        table{
            width: 100%;
            th {
                text-align: left;
                padding: 6px 0px;   
            }
            td {
                font-size: 18px;
                padding: 6px 0px;
            }
        }
        
    }
`