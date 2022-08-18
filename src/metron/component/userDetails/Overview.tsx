import styled, { useTheme } from "styled-components"
import { SecandaryButton } from "../../../component/Buttons"
import { Link } from "react-router-dom"
import { rgba } from "polished"
export default function Overview() {
    const theme = useTheme()
    return (
        <OverviewSection theme={theme}>
            <div className="flex justify-between items-center heading_section">
                <h1 className="text-[20px] font-semibold">Profile Details</h1>
                <SecandaryButton><Link to='/edit/emma'>Edit Button</Link></SecandaryButton>
            </div>

            <div className="profile_details">
                {ProfileData.map((i, ix) => {
                    return (
                        <div key={ix} className="profile_row flex items-center">
                            <p>{i.lable}</p>
                            <h2>{i.name}</h2>
                        </div>
                    )
                })}
            </div>
        </OverviewSection>
    )
}
const OverviewSection = styled.section`
    
    .heading_section{
        border: solid;
        border-width:0px 0px 1px 0px;
        padding-bottom: 20px;
        border-color:${p => rgba(p.theme.pure, 0.2)};
    }
    .profile_row {
        max-width:800px;
        margin: 20px 10px;
        @media (max-width:450px){
            flex-direction: column;
        }
    p{
        width: 50%;
        color:${p => rgba(p.theme.pure, 0.2)};
        font-size: 14px;
        font-weight: 400;
        @media (max-width:450px){
            width: 100%;
        }
    }
    h2{
        width: 50%;
        color:${p => rgba(p.theme.pure, 0.8)};
        @media (max-width:450px){
            width: 100%;
        }
    }
    p{}
    }
`
const ProfileData = [
    {
        id: 1,
        lable: 'Full Name',
        name: 'Max Smith',
    },
    {
        id: 2,
        lable: 'Company',
        name: 'Keenthemes',
    },
    {
        id: 3,
        lable: 'Contact Phone ',
        name: '044 3276 454 935',
    },
    {
        id: 4,
        lable: 'Company Site',
        name: 'keenthemes.com',
    }
]