import ReactApexChart from 'react-apexcharts'
import styled, { useTheme } from 'styled-components'
export default function WeeklySalesChart() {
    const config = {
        series: [20, 10, 35, 12, 23],
        options: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 450
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }
    return (
        <ChartSection>
            <h1 className='title'>Weekly Sales Chart</h1>
            <ReactApexChart options={config.options} series={config.series} type="donut" />
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
  }
`