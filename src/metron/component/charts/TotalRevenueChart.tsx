import ReactApexChart from "react-apexcharts"
import styled, { useTheme } from "styled-components"
export default function TotalRevenueChart() {
  const theme = useTheme()
  const config = {
    series: [{
      name: "Performance",
      data: [10, 21, 35, 41, 59, 62, 79, 81, 58, 10, 1, 5]
    }],
  }
  return (
    <ChartSection theme={theme}>
      <div>
        <h1 className="title">Total Revenue</h1>
        <ReactApexChart options={{
          stroke: {
            show: true,
            curve: 'smooth',
          },
          chart: {
            toolbar: {
              show: false
            },
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
              text: 'Month'
            }
          },
          yaxis: {
            title: {
              text: 'Performance'
            }
          },
          theme: {
            mode: 'dark',
            palette: 'palette6',
            monochrome: {
              enabled: false,
              color: '#009ef7',
              shadeTo: 'dark',
              shadeIntensity: 1
            },
          }

        }} series={config.series} type="line" />
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
  }
  .apexcharts-svg{
    background-color:transparent  !important;
    
  }
`