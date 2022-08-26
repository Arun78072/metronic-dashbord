import React from "react";

import styled, { useTheme } from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { red } from "@material-ui/core/colors";


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
            height: 350,
            type: 'line',
            background: 'transparent',
            width: '100%',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: "#ffffff",
                        opacity: 1
                    },

                ]
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
            labels: {
                show: false,
            }
        },
        tooltip: {
            // custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            //     return '<div class="arrow_box">' +
            //         '<span>' + 'Order ' + series[seriesIndex][dataPointIndex] + '</span>' +
            //         '</div>'
            // }
        },

        series: [{
            name: "Order ",
            data: [50, 200, 2, 91, 3, 71, 4, 62, 69, 91, 148]
        }],
    };

    return <ReactApexChart options={chartData} series={chartData.series} type="line" />;
};

const LineChart = () => {
    return (
        <SplineSection>
            <TravelDetailsView />
        </SplineSection>
    );
};

export default LineChart;
const SplineSection = styled.section`
  width:auto;
  border-radius:10px;
  h1.title{
    font-size: 18px;
    font-weight: 600;
  }
  .apexcharts-svg{
    background-color:transparent  !important;
    
  }
  .apexcharts-tooltip {
    background: #2aff5f;
    color: #000000;
  }
`