
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import { SecandaryButton } from '../../../component/Buttons'
export default function RecentActivity() {
    const theme = useTheme()
    return (
        <TabelSection theme={theme}>
            <div className='heading_section flex justify-between items-center'>
                <div>
                    <h1>Recent Activity</h1>
                    <h2>Your recent crypto activities</h2>
                </div>
                <SecandaryButton>View all</SecandaryButton>
            </div>
            <div className='activity_box'>
                <div className='flex '>
                    <span className='date'>12 Feb</span>
                    <div className='content'>
                        <h3>SELL / MARKET</h3>
                        <p>You sold <b>10 ETH for 48,500 USD.</b></p>
                    </div>
                </div>
                <div className='flex '>
                    <span className='date'>11 Feb</span>
                    <div className='content'>
                        <h2>Invite code sent</h2>
                        <p>Your friends joined the platform.</p>
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
                    </div>
                </div>
                <div className='flex '>
                    <span className='date'>9 Feb</span>
                    <div className='content'>
                        <h2>Uploaded documents</h2>
                        <p>You uploaded the following documents onto the crypto platform:</p>
                        <div className='box_image'>
                            <img src='https://tokyo-black-nextjs.bloomui.com/static/images/placeholders/fitness/1.jpg' />
                            <img src='https://tokyo-black-nextjs.bloomui.com/static/images/placeholders/fitness/2.jpg' />
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <span className='date'>9 Feb</span>
                    <div className='content'>
                        <h2>Profile verification</h2>
                        <p>You partially submitted the required documents.</p>
                        <button>Submit Remaining docs</button>
                    </div>
                </div>
                <div className='flex '>
                    <span className='date'>6 Feb</span>
                    <div className='content'>
                        <h2>Joined CryptoIO Platform</h2>
                        <p>Welcome to the platform. Enjoy your stay here!</p>
                    </div>
                </div>
            </div >

            <div className='text-center my-[20px]'><SecandaryButton>VIEW ALL ACTIVITY</SecandaryButton></div>
        </TabelSection >
    )
}

const TabelSection = styled.section`
    background:${props => props.theme.paper};
    color:${props => rgba(props.theme.pure, 0.6)};
    border-radius: 10px;
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    @media (max-width:450px){
            padding: 0px;
        }
.heading_section {
    border: 1px solid;
    border-color :  ${p => rgba(p.theme.pure, 0.2)};
    border-width: 0px 0px 1px 0px;
    padding: 26px;
    h2 {
        
        color:${props => rgba(props.theme.pure, 0.4)};
    }
    h1{
        font-weight: 600;
        color:${props => rgba(props.theme.pure, 0.8)};
        font-size:18px;
    }
}
.activity_box{
    padding: 20px;
    height: 330px;
    overflow-y: scroll;
    span.date{
        padding: 0px 20px 0px 10px;
        position: relative;
        width:90px;
    }
    span.date:after {
        content: '';
        right: -7px;
        top: 7px;
        position: absolute;
        width: 12px;
        height: 12px;
        border: 2px solid;
        border-radius: 50%;
        border-color:${p => p.theme.primary};
        z-index: 999;
        background: ${p => p.theme.paper};
        outline: 4px solid ${p => p.theme.paper};
    }
    .content {
        padding: 0px 10px 34px 20px;
        position: relative;
        border: solid;
        border-color :  ${p => rgba(p.theme.pure, 0.2)};
        border-width:0px 0px 0px 2px ;
        width: 100%;
        h3 {
            font-size: 12px;
            background: ${p => p.theme.success};
            width: fit-content;
            padding: 0px 6px;
            border-radius: 4px;
            font-weight: 600;
            color: ${p => p.theme.pure};
        }
        h2 {
            font-weight: 600;
            font-size: 18px;
            color: ${p => rgba(p.theme.pure, 0.8)}
        }
        p {
            font-weight: 400;
        }
         button {
            font-weight: 600;
            background: #ffa319;
            color: #fff;
            padding: 4px 10px;
            border-radius: 10px;
            margin: 10px 0px;
        }
        .profile_image {
            display: flex;
            img {
                width: 50px;
                border-radius: 50%;
                border: 3px solid;
                border-color: ${p => p.theme.paper};
                margin-right: -10px;
            }
        }
        .box_image {
            display: flex;
            img {
                width: 130px;
                border-radius: 10px;
                margin-right: 10px;
                margin-top: 10px;
            }
        }
    }
    
}


`
const Order = [
    {
        id: 1,
        Name: 'Gunilla Canario',
        designation: 'senior cost accountant at',
        profile: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/1.jpg',
        Locationlink: '#',
        location: 'Tokyo',

        Details: '#'
    },
    {
        id: 2,
        Name: 'Emma Smith',
        designation: 'Associate Professor at',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Locationlink: '#',
        location: 'Buzzdog',
        Percentage: 13,

        Details: '#'
    },
    {
        id: 3,
        Name: 'Rowena Geistmann',
        designation: 'Pharmacist at ',
        profile: 'https://tokyo-black-nextjs.bloomui.com/static/images/avatars/3.jpg',
        Locationlink: '#',
        location: 'Yozio',
        Percentage: 20,
        Details: '#'
    },
    {
        id: 4,
        Name: 'Emma Smith',
        designation: 'senior cost accountant at',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Locationlink: '#',
        location: 'Tokyo',
        Percentage: 80,
        Details: '#'
    },
    {
        id: 5,
        Name: 'Emma Smith',
        designation: 'senior cost accountant at',
        profile: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg',
        Locationlink: '#',
        location: 'Tokyo',
        Percentage: 63,
        Details: '#'
    },

]