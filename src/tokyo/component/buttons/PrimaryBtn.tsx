import { rgba } from "polished"
import styled, { useTheme } from "styled-components"

function TokyoPrimaryButton(p: any) {
    const theme = useTheme()
    return (
        <PriButton theme={theme}>
            {p.children}
        </PriButton>
    )
}
export { TokyoPrimaryButton }
const PriButton = styled.button`
    background: ${p => p.theme.paper};
    color: ${p => rgba(p.theme.primary, 1)};
    font-weight:600;
    padding: 10px 20px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border:1px solid;
    border-color: ${p => p.theme.primary};
    font-size: 14px;
`


function TokyoSimpleButton(p: any) {
    const theme = useTheme()
    return (
        <SimpleButton theme={theme}>
            {p.children}
        </SimpleButton>
    )
}
export { TokyoSimpleButton }
const SimpleButton = styled.button`
    background: ${p => rgba(p.theme.pure, 0.1)};
    color: ${p => rgba(p.theme.pure, 0.8)};
    font-weight:600;
    padding: 4px 10px;
    border-radius: 6px;
    display: flex;

    align-items: center;
    font-size: 14px;
    margin: auto;
`