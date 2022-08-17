import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import styled, { useTheme } from "styled-components";
import { rgba } from "polished";
export default function UserProfile() {
    const theme = useTheme()
    return (
        <ProfileSection theme={theme}>

            <img src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg' className="profile_pic" alt='Emma Smith' />
            <h2 className='title'>Emma Smith</h2>
            <p className='description'>Administrator</p>
            <span>Assigned Tickets <FontAwesomeIcon icon={faExclamationCircle} /></span>
            <div className="flex justify-center items-center gap-4 my-3">
                <div className="ticket_box">
                    <h1>243 <FontAwesomeIcon icon={faArrowDown} /></h1>
                    <p>Total</p>
                </div>
                <div className="ticket_box">
                    <h1>243 <FontAwesomeIcon icon={faArrowUp} /></h1>
                    <p>Total</p>
                </div>
                <div className="ticket_box">
                    <h1>243 <FontAwesomeIcon icon={faArrowDown} /></h1>
                    <p>Total</p>
                </div>
            </div>

        </ProfileSection>
    )
}
const ProfileSection = styled.section`
    background-color:${p => p.theme.paper};
    width: 30%;
    border-radius: 10px;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
    }
    h2.title {
        font-weight: 600;
        color:${p => rgba(p.theme.pure, 0.8)};
        font-size: 18px;
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
    span {
        font-weight: 600;
        margin-top: 20px;
        display: block;
    }
    span svg {
        color:${p => rgba(p.theme.pure, 0.2)};
    }
    .ticket_box {
        border: 1px dashed;
        border-color:${p => rgba(p.theme.pure, 0.2)};
        border-radius: 6px;
        padding: 8px 10px;
    }
    

`