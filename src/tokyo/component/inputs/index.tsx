import styled, { useTheme } from "styled-components";
import { rgba } from "polished"




// InputBox with label Function 
function InputBox({ label, placeholder, Required, inputType }: propsType) {
    const theme = useTheme()
    return (
        <InputSection theme={theme}>
            <label htmlFor="name">{label} <span>{Required ? '*' : ''}</span> </label>
            <input type={inputType} name='name' placeholder={placeholder} />
        </InputSection>
    )
}
export { InputBox }
interface propsType {
    label: string;
    placeholder: string;
    Required: boolean;
    inputType: string;
}
InputBox.defaultProps = {
    label: '',
    placeholder: '',
    Required: false,
    inputType: 'text',
};
const InputSection = styled.section`
    width: 100%;
     label {
            display: block;
            font-weight: 600;
            color:${p => rgba(p.theme.pure, 0.4)};
            margin-top: 10px;
            span{
                color:${p => p.theme.danger};
            }
        }
        input{
            color:${p => rgba(p.theme.pure, 0.6)};
            background:${p => rgba(p.theme.base, 0.5)};
            width: 100%;
            border-radius: 6px;
            margin: 10px 0px;
            padding: 10px;
        }
        input {
            height: 40px;
        }
       
        /* For Hide Input Number Arrows */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        /*  */
`









// Label tag Function
function Label({ label, Required, htmlFor }: labelpropsType) {
    return (
        <LabelSection htmlFor={htmlFor} >{label} <span>{Required ? '*' : ''}</span> </LabelSection>
    )
}
export { Label }
interface labelpropsType {
    label: string;
    Required: boolean;
    htmlFor: string;
}
Label.defaultProps = {
    label: '',
    Required: false,
    htmlFor: '',
};
const LabelSection = styled.label`
    display: block;
    font-weight: 600;
    color:${p => rgba(p.theme.pure, 0.4)};
    margin-top: 10px;
    span{
        color:${p => p.theme.danger};
    }
`














// Input tag function 
function Input({ inputType, placeholder, htmlFor }: inputpropsType) {
    return (
        <InputDiv>
            <input type={inputType} name={htmlFor} placeholder={placeholder} />
        </InputDiv>
    )
}
export { Input }
interface inputpropsType {
    inputType: string;
    htmlFor: string;
    placeholder: string;
}
Input.defaultProps = {
    inputType: 'text',
    placeholder: '',
    htmlFor: '',
};
const InputDiv = styled.div`
width:100%;
    input{
            color:${p => rgba(p.theme.pure, 0.6)};
            background:${p => rgba(p.theme.base, 0.5)};
            border-radius: 6px;
            width: 100%;
            margin: 10px 0px;
            padding: 10px;
        }
        input {
            height: 40px;
        }
       
        /* For Hide Input Number Arrows */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
`







//  









// TextBox Function 
function TextBox({ label, Required, height }: TextpropsType) {
    const theme = useTheme()
    const he = '20px'
    return (
        <TextBoxSection theme={theme}>
            <label htmlFor="notes">{label} </label>
            <textarea id="notes" name="notes"></textarea>
        </TextBoxSection>
    )
}
export { TextBox }
interface TextpropsType {
    label: string;
    Required: boolean;
    height: string;
}
TextBox.defaultProps = {
    label: '',
    Required: false,
    height: '80px',

};
const TextBoxSection = styled.section`
width:100%;
     label {
            display: block;
            font-weight: 600;
            color:${p => rgba(p.theme.pure, 0.4)};
            margin-top: 10px;
            span{
                color:${p => p.theme.danger};
            }
        }
        textarea {
            color:${p => rgba(p.theme.pure, 0.6)};
            background:${p => rgba(p.theme.base, 0.5)};
            width: 100%;
            border-radius: 6px;
            margin: 10px 0px;
            padding: 10px;
        }
        textarea {
            height: 80px;
        }
`


