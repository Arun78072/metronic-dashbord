import { rgba } from 'polished'
import styled, { useTheme } from 'styled-components'
export default function ProgressBar({ color, percentage }: types) {
    const theme = useTheme()
    return (
        <Progress theme={theme} style={{ backgroundColor: `${rgba(color, 0.2)}` }}>
            <div style={{ width: `${percentage}%`, backgroundColor: `${color}` }}></div>
        </ Progress >
    )
}
interface types {
    color: string,
    percentage: number,
}
ProgressBar.defaultProps = {
    color: '#8c7cf0',
    percentage: 30,
}

const Progress = styled.div`
    width:100%;
    border-radius: 50px;
    height: 10px;
    position: relative;
    & > div{
    position: absolute;
    top: 0px;
    height: 10px;
    border-radius: 50px;
    left: 0px;
}
`
