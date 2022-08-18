import styled, { useTheme } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { rgba } from "polished"
import { InputBox, TextBox } from "../inputs"
export default function EditContact() {
    const theme = useTheme()
    return (
        <EditSection theme={theme}>
            <div className="main_section">
                <h1 className="title"> <FontAwesomeIcon icon={faAddressBook} /> Edit Your Profile </h1>
                <h3 className="update_avatar">Update Avatar <FontAwesomeIcon icon={faExclamationCircle} /></h3>
                <img src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg' className='avatar_img' />
                <div className="form">
                    <InputBox label='Name' placeholder='Emma Smith' Required inputType='text' ></InputBox>
                    <InputBox label='Company Name' inputType='text' ></InputBox>
                    <div className="form_section flex gap-4">
                        <InputBox label='Email' Required inputType='email' placeholder="smith@kpmg.com" ></InputBox>
                        <InputBox label='Phone' inputType='number' ></InputBox>
                    </div>
                    <div className="form_section flex gap-4">
                        <InputBox label='City' inputType='text' ></InputBox>
                        <InputBox label='Country' Required inputType='text' ></InputBox>
                    </div>
                    <TextBox label='Notes' height='50px'></TextBox>
                </div>
            </div>
        </EditSection>
    )
}
const EditSection = styled.section`
    padding: 20px;
.main_section{
    background:${p => p.theme.paper};
    padding: 20px;
    border-radius: 6px;
    color:${p => p.theme.pure};
    .title{
        font-size: 18px;
        font-weight: 600;
        svg {
            color:${p => rgba(p.theme.pure, 0.2)};
        }
    }
    .update_avatar{
        font-weight: 600;
        margin: 30px 0px;
        svg {
            color:${p => rgba(p.theme.pure, 0.2)};
        }
    }
    img.avatar_img {
        max-width: 140px;
        border-radius: 6px;
    }
    .form{
        max-width: 500px;
        margin-top: 30px;
    }
}
`