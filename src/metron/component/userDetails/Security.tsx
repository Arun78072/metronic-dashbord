import React, { useState, useRef, useEffect } from 'react'
import styled, { useTheme } from "styled-components"
import { rgba } from 'polished'
import { Input, InputBox, Label } from "../inputs"
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { SecandaryButton } from '../../../component/Buttons'
import { Link } from 'react-router-dom'

export default function Security() {
    const [imgUrl, setImgUrl] = useState('https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg')
    const theme = useTheme()
    const options = [
        { value: 'Afghanistan', label: 'Afghanistan' },
        { value: 'Åland Islands', label: 'Åland Islands' },
        { value: 'Albania', label: 'Albania' },
        { value: 'Algeria', label: 'Algeria' },
        { value: 'American Samoa', label: 'American Samoa' },
        { value: 'Andorra', label: 'Andorra' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Anguilla', label: 'Anguilla' },
        { value: 'Antarctica', label: 'Antarctica' },
        { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
        { value: 'Argentina', label: 'Argentina' },
        { value: 'Armenia', label: 'Armenia' },
        { value: 'Aruba', label: 'Aruba' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Austria', label: 'Austria' },
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Bahamas (the)', label: 'Bahamas (the)' },
        { value: 'Bahrain', label: 'Bahrain' },
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'Barbados', label: 'Barbados' },
        { value: 'Belarus', label: 'Belarus' },
        { value: 'Belgium', label: 'Belgium' },
        { value: 'Belize', label: 'Belize' },
        { value: 'Benin', label: 'Benin' },
        { value: 'Bermuda', label: 'Bermuda' },
        { value: 'Bhutan', label: 'Bhutan' },
    ]
    const ImageUrl = (e: any) => {
        const [file] = e.target.files;
        setImgUrl(URL.createObjectURL(file))
    };
    const inputRef = useRef<any>(null)
    const handleClick = () => {
        inputRef.current.click();
    };
    return (
        <SecuritySection theme={theme}>
            <div className="flex justify-between items-center heading_section">
                <h1 className="text-[20px] font-semibold">Profile Details</h1>
            </div>
            <div className='setting_profile'>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Avatar' ></Label></div>
                    <div className='sm:w-2/3 w-full avatar_img'>
                        <div className='img_box'>
                            <img src={imgUrl} />
                            <button onClick={handleClick} className='edit_btn'><FontAwesomeIcon icon={faPen} /></button>
                        </div>
                        <input type="file" accept="image/*" id="choose-file" name="choose-file" onChange={ImageUrl} ref={inputRef} />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Full Name' Required htmlFor='name'></Label></div>
                    <div className='flex gap-4 sm:w-2/3 w-full'>
                        <Input inputType='text' placeholder='Max'></Input>
                        <Input inputType='text' placeholder='Smith'></Input>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Company' Required htmlFor='company'></Label></div>
                    <div className='sm:w-2/3 w-full'><Input inputType='text' placeholder='Keenthemes' htmlFor="company"></Input></div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Contact Phone' Required htmlFor='phone'></Label></div>
                    <div className='sm:w-2/3 w-full'><Input inputType='number' placeholder='044 3276 454 935' htmlFor="phone"></Input></div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Company Site' htmlFor='website'></Label></div>
                    <div className='sm:w-2/3 w-full'><Input inputType='text' placeholder='Select company...' htmlFor="website"></Input></div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Country ' Required htmlFor='country'></Label></div>
                    <div className='sm:w-2/3 w-full select_box'>
                        <Select options={options} placeholder='Select a country ...' classNamePrefix='react_select' />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Language ' Required htmlFor='language'></Label></div>
                    <div className='sm:w-2/3 w-full select_box'>
                        <Select options={options} placeholder='Select a language ...' classNamePrefix='react_select' />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Communication' Required htmlFor='communication'></Label></div>
                    <div className='sm:w-2/3 w-full'>
                        <Input inputType='text' placeholder='Communication' htmlFor="communication"></Input>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className='sm:w-1/3 w-full'><Label label='Allow Marketing' Required htmlFor='marketing'></Label></div>
                    <div className='sm:w-2/3 w-full'>
                        <Input inputType='text' placeholder='Allow Marketing' htmlFor="communication"></Input>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bottom_section">
                <h1 className="text-[20px] font-semibold"></h1>
                <SecandaryButton><Link to='/edit/emma'>Save Changes</Link></SecandaryButton>
            </div>
        </SecuritySection>
    )
}
const SecuritySection = styled.section`
    .heading_section{
        border: solid;
        border-width:0px 0px 1px 0px;
        padding-bottom: 20px;
        border-color:${p => rgba(p.theme.pure, 0.2)};
    }
    .bottom_section{
        border: solid;
        border-width:1px 0px 0px 0px;
        padding-top: 20px;
        border-color:${p => rgba(p.theme.pure, 0.2)};
    }
    .setting_profile{
        margin-top: 36px;
        .setting_profile >div {
            margin: 12px 0px;
        }
        .avatar_img {
            position: relative;
        }
        .avatar_img img {
            width: 160px;
            height: 160px;
            object-fit: cover;
            border-radius: 8px;
        }
        input#choose-file {
            visibility: hidden;
        }
        .img_box {
            width: fit-content;
            position: relative;
        }
        button.edit_btn {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color:${p => rgba(p.theme.paper, 1)};
            width: 30px;
            height: 30px;
            border-radius: 8px;
            box-shadow: 0px 0px 4px -1px #ffffffa1;
        }
    }
    .select_box{
        .css-1s2u09g-control , .react_select__control--is-focused {
            color:${p => rgba(p.theme.pure, 0.6)};
        background-color:${p => rgba(p.theme.base, 0.5)} !important;
        border-radius: 6px;
        border-color:transparent;
        margin: 10px 0px;
        padding: 4px 0px;
        }
        .css-2613qy-menu{
            color:${p => rgba(p.theme.pure, 0.6)};
            background:${p => rgba(p.theme.base, 0.5)};
        }
        .react_select__menu {
            background:${p => p.theme.base};
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .react_select__option {
            cursor: pointer;
        }
        .react_select__option{
            background:${p => rgba(p.theme.base, 0.5)};
        }
        .react_select__single-value , .react_select__placeholder {
            color:${p => rgba(p.theme.pure, 0.6)};
        }
    }
    
`