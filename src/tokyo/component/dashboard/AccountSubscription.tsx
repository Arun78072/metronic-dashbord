import { faAngleUp, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
export default function AccountSubscription() {
    const theme = useTheme()


    return (
        <DetailSection theme={theme}>
            <div className='tile red_tile'>
                <span>
                    <h2>Accounts</h2>
                    <h1><FontAwesomeIcon icon={faAngleUp} /> 37,594</h1>
                </span>
                <div className='progress_circle'> <CircularProgress variant="determinate" value={43} size='100%' className='circle_bar' /></div>
            </div>
            <div className='tile green_tile'>
                <span>
                    <h2>Subscriptions</h2>
                    <h1><FontAwesomeIcon icon={faPlus} /> 545<span> new</span> </h1>
                </span>
                <div className='progress_circle'><CircularProgress variant="determinate" value={76} size='100%' className='circle_bar' /></div>
            </div>
        </DetailSection>
    )
}
const DetailSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
    .tile{
        flex: 1;
        background:${p => p.theme.paper};
        border-radius: 10px;
        padding: 20px;
        border: solid;
        border-width: 0px 0px 5px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.red_tile{
            border-color: ${p => p.theme.danger};
            box-shadow: 0px 8px 10px -2px ${p => rgba(p.theme.danger, 0.3)};
        }
        &.green_tile{
            border-color: ${p => p.theme.success};
            box-shadow: 0px 8px 10px -2px ${p => rgba(p.theme.success, 0.3)};
        }

         h2 {
            text-transform: uppercase;
            font-weight: 600;
            color:${p => rgba(p.theme.pure, 0.4)};
        }
        h1 {
            font-size: 28px;
            font-weight: 600;
            color:${p => rgba(p.theme.pure, 0.7)};
            svg {
                font-size: 20px;
                color:${p => rgba(p.theme.success, 9)};
            }
        }
    }
    .progress_circle{
        width:60px;
    }
    .red_tile .circle_bar svg{
        color:${p => p.theme.danger};
        }
    .green_tile .circle_bar svg{
        color:${p => p.theme.success};
        }
`