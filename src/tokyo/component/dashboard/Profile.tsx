import React from 'react'
import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { rgba } from 'polished'
import Tooltip from '@mui/material/Tooltip';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Button from '@mui/material/Button';

import { useLottie } from "lottie-react";
import fire from "../../../assets/Animation/fire.json";
// import yoga from "../assets/animations/yoga.json";.


export default function Profile() {
    const theme = useTheme()
    const options = {
        animationData: fire,

        loop: true
    };
    const { View } = useLottie(options);
    return (
        <ProfileSection theme={theme}>
            <span className='block text-right ellipsis_icon cursor-pointer'><FontAwesomeIcon icon={faEllipsis} /></span>
            <div className='profile_box text-center'>
                <div className='fire_image'>
                    <img src='https://play-lh.googleusercontent.com/Z2XnSlqHWZ6rgOdWJoOJJbIQIqQHcbDsCrF23Oo1ciu878Vnzqn0chW9-Fe04FPI9tGp' className='profile_pic' />
                    <span className='onhover_fire'>{View}</span>
                </div>
                <h1>Ninja Warrior</h1>
                <button>OFFLINE</button>
                <p>High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes.</p>
            </div>
            <div className='social_icon flex justify-center gap-3'>
                <div>
                    <Tooltip title="Facebook" placement="top">
                        <button>
                            <FacebookIcon />
                        </button>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip title="Twitter" placement="top">
                        <button>
                            <TwitterIcon />
                        </button>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip title="Instagram" placement="top">
                        <button>
                            <InstagramIcon />
                        </button>
                    </Tooltip>
                </div>
            </div>
            <div className='flex buttons justify-center gap-6 w-fit mx-auto my-5'>
                <Button variant="contained" href="#">
                    <AccountTreeOutlinedIcon />
                    <h2>Projects</h2>
                    <h3> Newest tasks</h3>
                </Button>
                <Button variant="contained" href="#">
                    <ContactSupportOutlinedIcon />
                    <h2>Helpdesk</h2>
                    <h3>Tickets overview</h3>
                </Button>
            </div>
        </ProfileSection>
    )
}
const ProfileSection = styled.section`
    background:${p => p.theme.paper};
    border-radius: 10px;
    border: 1px solid;
    border-color:  ${p => rgba(p.theme.pure, 0.2)};
    padding:20px;
    color: ${p => rgba(p.theme.pure, 0.8)};
    .profile_box{
        img.profile_pic {
            border-radius: 50%;
            width: 140px;
            margin: auto;
            border: 5px solid;
            border-color: ${p => rgba(p.theme.base, 0.6)};
            transition: all 1s;
            cursor: pointer;
        }
        img.profile_pic:hover {
                box-shadow:inset 0 0 50px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff,inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,  0 0 50px #fff,-10px 0 80px #f0f, 10px 0 80px #0ff;
        }
        h1{
            font-size: 22px;
            font-weight: 600;
            transition:all 1s;
            cursor: pointer;
            margin: 10px 0px;
        }
        h1:hover{
            color: ${p => rgba(p.theme.primary, 0.8)};
        }
        button{
            background : ${p => p.theme.danger};
            padding: 4px 10px;
            border-radius: 8px;
            font-weight: 600;
        }
        p{
            color: ${p => rgba(p.theme.pure, 0.6)};
            margin: 10px 0px;
        }
    }
    .social_icon{
        & > div{
            background: ${p => p.theme.primary};
            border-radius: 50%;
            box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
        }
        
        button{
            padding:22px;
        }
        svg{
            color:${p => p.theme.pure}
        }
    }
    .buttons{
        @media (max-width: 450px) {
            flex-direction: column;
            width: 100%;
        }
    }
    .buttons a {
        background: ${p => rgba(p.theme.base, 0.2)};
        border:1px solid;
        border-color : ${p => rgba(p.theme.pure, 0.2)};
        color: ${p => rgba(p.theme.pure, 0.8)};
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        flex: 1;
        min-width: 200px;
        padding: 16px 10px;
        h2{
            font-weight: 600;
            font-size: 16px;
            margin: 10px 0px 6px;
        }
        h3{
            font-size:14px;
            color: ${p => rgba(p.theme.pure, 0.6)};
        }
    }

    .fire_image{
        position: relative;
        cursor: pointer;
    }

    span.onhover_fire {
        position: absolute;
        left: 51%;
        top: 20px;
        width: 126px;
        transform: translateX(-50%);
        opacity:0;
        transition: all 0.6s ease-out;
    }
    .fire_image:hover span.onhover_fire{
        opacity:1;
    }
    .fire_image:hover img.profile_pic{
                box-shadow:inset 0 0 50px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff,inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,  0 0 50px #fff,-10px 0 80px #f0f, 10px 0 80px #0ff;
        }

    
`
