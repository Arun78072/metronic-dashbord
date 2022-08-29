import React from 'react'
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { Tooltip } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function SocialProfile() {
    const theme = useTheme()
    return (
        <SocialSection theme={theme}>
            <div className='profile_box'>
                <span className='icon'><FavoriteBorderTwoToneIcon /></span>
                <div className='icon_img'><img src='./images/spotify.png' /></div>
                <h1>Development</h1>
                <p>Build React Interface</p>
                <div className='profile_image'>
                    <Tooltip title="Remy Sharp">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg' />
                    </Tooltip>
                    <Tooltip title="Travis Howard">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/2.jpg' />
                    </Tooltip>
                    <Tooltip title="Cindy Baker">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg' />
                    </Tooltip>
                    <Tooltip title="Agnes Walker">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/4.jpg' />
                    </Tooltip>
                </div>
                <div className='profile_btn'>
                    <button><AccountCircleOutlinedIcon />Company Profile</button>
                </div>
            </div>
            <div className='profile_box'>
                <span className='icon'><FavoriteBorderTwoToneIcon /></span>
                <div className='icon_img'><img src='./images/spotify.png' /></div>
                <h1>Development</h1>
                <p>Build React Interface</p>
                <div className='profile_image'>
                    <Tooltip title="Remy Sharp">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg' />
                    </Tooltip>
                    <Tooltip title="Travis Howard">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/2.jpg' />
                    </Tooltip>
                    <Tooltip title="Cindy Baker">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg' />
                    </Tooltip>
                    <Tooltip title="Agnes Walker">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/4.jpg' />
                    </Tooltip>
                </div>
                <div className='profile_btn'>
                    <button><AccountCircleOutlinedIcon />Company Profile</button>
                </div>
            </div>
            <div className='profile_box'>
                <span className='icon'><FavoriteBorderTwoToneIcon /></span>
                <div className='icon_img'><img src='./images/spotify.png' /></div>
                <h1>Development</h1>
                <p>Build React Interface</p>
                <div className='profile_image'>
                    <Tooltip title="Remy Sharp">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg' />
                    </Tooltip>
                    <Tooltip title="Travis Howard">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/2.jpg' />
                    </Tooltip>
                    <Tooltip title="Cindy Baker">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg' />
                    </Tooltip>
                    <Tooltip title="Agnes Walker">
                        <img src='https://tokyo-black-nextjs.bloomui.com/static/images/avatars/4.jpg' />
                    </Tooltip>
                </div>
                <div className='profile_btn'>
                    <button><AccountCircleOutlinedIcon />Company Profile</button>
                </div>
            </div>
        </SocialSection>
    )
}

const SocialSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    gap: 20px;
    margin-top: 20px;
    .profile_box{
        background:${props => props.theme.paper};
        color:${props => rgba(props.theme.pure, 0.6)};
        border-radius: 10px;
        border: 1px solid;
        border-color :  ${p => rgba(p.theme.pure, 0.2)};
        text-align: center;
            h1{
                font-size: 20px;
                font-weight: 600;
                color:${props => rgba(props.theme.pure, 0.9)};
            }
            span.icon {
                display: block;
                text-align: right;
                margin: 10px;
            }
        .icon_img {
            width: 80px;
            margin: 24px auto;
            background: ${props => rgba(props.theme.base, 0.9)};;
            padding: 18px;
            border-radius: 10px;
            box-shadow: rgb(203 204 210 / 30%) 0px 0.18rem 0.3rem, rgb(203 204 210 / 20%) 0px 0.326rem 3rem;
        }
        .profile_btn {
            border: 1px solid ${p => rgba(p.theme.pure, 0.2)};
            border-width: 1px 0px 0px 0px;
            padding: 30px;
            button {
                border: 1px solid ${p => rgba(p.theme.pure, 0.4)};
                padding: 8px 14px;
                width: 100%;
                border-radius: 10px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                gap:6px;
            }
        }
    }
    .profile_image {
        display: flex;
        justify-content: center;
        padding: 20px 0px;
        img {
            width: 40px;
            border-radius: 50%;
            border: 3px solid;
            border-color: ${p => p.theme.paper};
            margin-right: -10px;
        }
    }    
`