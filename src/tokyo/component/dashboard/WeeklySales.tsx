
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../progressBar'

export default function WeeklySales() {
    const theme = useTheme()
    return (
        <TabelSection theme={theme}>
            <div className='heading_section flex justify-between items-center'>
                <div>
                    <h1>Weekly sales</h1>
                    <h2>Reports for what we sold this week</h2>
                </div>
                <span><FontAwesomeIcon icon={faEllipsisVertical} /></span>
            </div>
            <div className='sale_content'>
                <h1>$487,385</h1>
                <div className='child_section flex justify-between items-center gap-8'>
                    <div>
                        <h2>14%</h2>
                        <ProgressBar color='#ff1943' percentage={14} />
                        <p>Cars</p>
                    </div>
                    <div>
                        <h2>46%</h2>
                        <ProgressBar color='#4fce29' percentage={46} />
                        <p>Outdoor</p>
                    </div>
                    <div>
                        <h2>40%</h2>
                        <ProgressBar color='#fba92d' percentage={40} />
                        <p>Electronics</p>
                    </div>

                </div>
            </div>
            <div className='graph_section'>
                graph section will do it later
            </div>

        </TabelSection >
    )
}

const TabelSection = styled.section`
    background:${props => props.theme.paper};
    color:${props => rgba(props.theme.pure, 0.6)};
    border-radius: 10px;
    height:100%;
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    @media (max-width:450px){
            padding: 10px;
        }
.heading_section {
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    border-width: 0px 0px 1px 0px;
    padding: 26px;
    h2 {
        font-weight: 700;
        color:${props => rgba(props.theme.pure, 0.4)};
    }
    h1{
        font-weight: 600;
        color:${props => rgba(props.theme.pure, 0.8)};
        font-size:18px;
    }
    span svg{
        color:${p => p.theme.primary};
        font-size: 24px;
    }
}
.sale_content {
    padding: 46px;
    h1 {
        font-size: 46px;
        font-weight: 600;
    }
    .child_section{
        & > div{
            flex:1;
        }
        h2 {
            font-weight: 600;
            font-size: 26px;
            margin-bottom: 16px;
        }
        p{
            margin-top: 16px;
        }
    }
}

`
