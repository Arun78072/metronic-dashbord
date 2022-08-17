import { rgba } from "polished"
import styled, { useTheme } from "styled-components"

function PrimaryButton(p: any) {
    const theme = useTheme()
    return (
        <PriButton theme={theme}>
            {p.children}
        </PriButton>
    )
}
export { PrimaryButton }
const PriButton = styled.button`
    background: ${p => p.theme.paper};
    color: ${p => rgba(p.theme.pure, 0.6)};
    padding: 10px 20px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: 14px;
`

function SecandaryButton(p: any) {
    const theme = useTheme()
    return (
        <SecButton theme={theme}>
            {p.children}
        </SecButton>
    )
}
export { SecandaryButton }
const SecButton = styled.button`
    background: ${p => p.theme.primary};
    color: ${p => rgba(p.theme.pure, 1)};
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
`