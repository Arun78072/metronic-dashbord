import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styled, { useTheme } from "styled-components";
import { rgba } from "polished";
export default function UserProfile() {
    const theme = useTheme()
    return (
        <ProfileSection theme={theme}>
            <div className='img_section'><img src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg' className="profile_pic" alt='Emma Smith' /><span className='online'></span></div>
            <div>
                <h2 className='title'>Emma Smith <span className="icon"><FontAwesomeIcon icon={faCheckCircle} /></span><span className="pro">Upgrade to pro</span></h2>
                <div className="user_info flex items-center gap-4 my-3 flex-wrap">
                    <a href='#'>Developer</a>
                    <a href='#'>SF, Bay Area</a>
                    <a href='#'>max@kt.com</a>
                </div>
                <div className="flex items-center gap-4 my-3 flex-wrap">
                    <div className="ticket_box">
                        <h1> <FontAwesomeIcon icon={faArrowDown} />$4,500</h1>
                        <p>Earnings</p>
                    </div>
                    <div className="ticket_box">
                        <h1><FontAwesomeIcon icon={faArrowUp} /> 75 </h1>
                        <p>Projects</p>
                    </div>
                    <div className="ticket_box">
                        <h1><FontAwesomeIcon icon={faArrowDown} />%60</h1>
                        <p>Success Rate</p>
                    </div>
                </div>
            </div>

        </ProfileSection>
    )
}
const ProfileSection = styled.section`
    background-color:${p => p.theme.paper};
    display: flex;
    justify-content: start;  
    padding:20px 0px;
    border-radius:6px; 
    @media (max-width:450px){
        flex-direction: column;
        padding:20px;
        gap: 20px;
    }
    .img_section{
        position: relative;
        margin: 0px 20px;
        width: fit-content;
    }
    img.profile_pic {
        width: 168px;
        height: 168px;
        border-radius: 10px;
        position: relative;
        @media (max-width:450px){
            margin: 0px;
        }
    }
    span.online {
        position: absolute;
        background: ${p => p.theme.success};;
        height: 20px;
        width: 20px;
        right: -10px;
        top: 100px;
        border-radius: 50%;
        border: 4px solid;
        border-color:${p => p.theme.paper};
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    h2.title {
        font-weight: 700;
        color:${p => rgba(p.theme.pure, 0.8)};
        font-size: 22px;
        align-items: center;
        gap: 12px;
        display: flex;
        span.pro {
            color: ${p => p.theme.success};
            font-size: 12px;
            font-weight: 600;
            background:${p => rgba(p.theme.success, 0.2)};
            padding: 2px 10px;
            border-radius: 4px;
        }
    }
    .user_info a {
        color: ${p => rgba(p.theme.pure, 0.4)};
        font-weight:600;
    }
    .user_info a:hover {
        color: ${p => rgba(p.theme.primary, 1)};
    }
    p.description{
        background-color:${p => rgba(p.theme.primary, 0.2)};
        color:${p => p.theme.primary};
        font-weight: 600;
        width: fit-content;
        margin: 4px auto;
        padding: 0px 10px;
        border-radius: 4px;
        font-size: 14px;
    }
    span svg {
        color:${p => rgba(p.theme.pure, 0.2)};
    }
    .ticket_box {
        border: 1px dashed;
        border-color:${p => rgba(p.theme.pure, 0.2)};
        border-radius: 6px;
        padding: 8px 10px;
        width: 122px;

    h1 {
        font-size: 22px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
        svg{
            font-size: 14px;
            padding: 0px 4px;
        }
    }
    p{
        color:${p => rgba(p.theme.pure, 0.4)};
    }
    }
    

`