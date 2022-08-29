
import React from "react";

import styled, { useTheme } from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


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
            height: 'auto',
            width: '100%',
            type: 'area',
            toolbar: {
                show: false
            },
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            show: false,
        },
        xaxis: {
            type: 'datetime',
            categories: ["1", "2", "3", "4", "5", "6", "7"],

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
            x: {
                format: 'mm'
            },
        },

        series: [{
            name: 'series1',
            data: [20, 4, 70, 51, 92, 69, 100]
        }],
    };

    return <ReactApexChart options={chartData} series={chartData.series
    } type="area" />;
};

const IncomeChart = () => {
    return (
        <ChartSection>
            <TravelDetailsView />
        </ChartSection>
    );
};

export default IncomeChart;
const ChartSection = styled.section`
  width:100%;
  background-color:${p => p.theme.paper} !important;
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