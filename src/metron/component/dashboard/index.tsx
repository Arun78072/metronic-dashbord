import React, { useEffect, useState } from 'react';
import { rgba } from 'polished'
import styled, { useTheme } from 'styled-components'
import TotalRevenueChart from '../charts/TotalRevenueChart'
import WeeklySalesChart from '../charts/WeeklySalesChart'
export default function Dashboard() {
    const theme = useTheme()
    const [number, setNumber] = useState<any>()
    const Data = [
        {
            id: 1,
            title: 'Sales Today',
            day: 'Today',
            number: '2.532',
            percentage: +26,
            description: 'Since last month',
        },
        {
            id: 2,
            title: 'Sales Today',
            day: 'Today',
            number: '2.532',
            percentage: -26,
            description: 'Since last month',
        },
        {
            id: 3,
            title: 'Sales Today',
            day: 'Today',
            number: '$ 2.532',
            percentage: +26,
            description: 'Since last month',
        },
        {
            id: 4,
            title: 'Sales Today',
            day: '',
            number: '2.532',
            percentage: -26,
            description: 'Since last month',
        },
    ]
    // const val = 200;
    // useEffect(() => {
    //     for (let i = 0; i < val; i++) {
    //         // setInterval(() => {
    //         setNumber(i)
    //         console.log('------', i)
    //         // }, 6000)
    //     }


    // }, [])














    const [count, setCount] = React.useState(0);

    useEffect(
        () => {
            const timer = () => {
                setCount(count + 1);
            }
            // if you want it to finish at some point
            if (count >= 100) {
                return;
            }
            const id = setInterval(timer, 100);
            return () => clearInterval(id);

        },
        [count]
    );


    console.log('-----------')

    return (
        <DashboardSection theme={theme}>
            <h1 className="p-10 font-bold"> Count :  {count}</h1>
            <div className='top_section'>
                {Data.map((i, ix) => {
                    return (
                        <div key={ix}>
                            <div className='title'><h2>{i.title}</h2> <span>{i.day}</span></div>
                            <h1>{i.number}</h1>
                            <p><span className={i.percentage >= 0 ? 'green' : 'red'}>{i.percentage}%</span>{i.description} </p>
                        </div>
                    )
                })}
            </div>
            <div className='graph_section'>
                <TotalRevenueChart />
                <WeeklySalesChart />
            </div>
        </DashboardSection >
    )
}
const DashboardSection = styled.section`
    color:${p => p.theme.pure};
    padding:20px;
    .top_section{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        @media (max-width:1024px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width:450px){
            grid-template-columns: 1fr;
        }
        > div{
            background-color:${p => p.theme.paper};
            padding: 20px;
            border-radius: 10px;
            .title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h2{
                    font-size: 18px;
                    font-weight: 600;
                }
                span {
                    background: ${p => p.theme.primary};
                    padding: 0px 6px;
                    border-radius: 4px;
                    font-size: 12px;
                }
            }
            h1 {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 10px;
            }
            p {
                font-size: 14px;
                span{
                    margin: 0px 10px 0px 0px;
                    border-radius: 4px;
                    padding: 0px 4px;
                }
                span.green{
                    background: ${p => rgba(p.theme.success, 0.2)};
                    color:${p => p.theme.success};
                }
                span.green::before {
                    content: '+';
                }
                span.red{
                    background: ${p => rgba(p.theme.danger, 0.2)};
                    color:${p => p.theme.danger};
                }
            }
    }
    }
    .graph_section{
        display: grid;
        width: 100%;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
        margin: 20px 0px 0px 0px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    }

`