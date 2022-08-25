
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
      height: 350,
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
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      labels: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: false,
      }
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },

    series: [{
      name: 'series1',
      data: [61, 40, 70, 51, 92, 69, 100]
    }],
  };

  return <ReactApexChart options={chartData} series={chartData.series
  } type="area" />;
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