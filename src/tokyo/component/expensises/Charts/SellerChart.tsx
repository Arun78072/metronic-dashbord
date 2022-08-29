

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled, { useTheme } from 'styled-components'
interface ApexChartProps { }

interface TravelDetailsViewProps {
    options?: any;
    series?: any;
}

// const EditRoleForm = ({ onCompleted, onCancel, value, ...rest }: EditRoleFormProps) => {

const TravelDetailsView = () => {
    const theme = useTheme();

    const chartData: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['#8264d4', '#612040'],
            // colors: ['transparent']
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            },
            labels: {
                show: false,
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Net Loss ',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
    };

    return <ReactApexChart options={chartData} series={chartData.series} type="bar" />;
};

const SellerChart = () => {
    return (
        <ChartSection>
            <TravelDetailsView />
        </ChartSection>
    );
};

export default SellerChart;


const ChartSection = styled.section`
.apexcharts-tooltip {
    background: #2aff5f;
    color: #000000;
   
  }
`