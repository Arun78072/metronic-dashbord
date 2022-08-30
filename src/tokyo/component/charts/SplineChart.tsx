
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
      curve: 'smooth',
      colors: ['#ff9100'],
      width: 2,
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: 0
      }
    },
    xaxis: {
      type: 'datetime',
      // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      categories: ["2018-09-10", "2018-09-11", "2018-09-12", "2018-09-13", "2018-09-14", "2018-09-15", "2018-09-16",],

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
        offsetX: -10
      },

    },
    tooltip: {
      // x: {
      //   format: 'dd/MM/yy'
      // },
    },
    fill: {
      colors: ['#ff9100'],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        gradientToColors: ['#ff9100', '#ffffff'],
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 100, 100]
      }
    },
    series: [{
      name: 'Sales',
      data: [61, 40, 70, 51, 92, 69, 100]
    }],
  };

  return <ReactApexChart options={chartData} series={chartData.series} type="area" />;
};

const SplineChart = () => {
  return (
    <SplineSection>
      <TravelDetailsView />
    </SplineSection>
  );
};

export default SplineChart;
const SplineSection = styled.section`
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