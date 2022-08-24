import React, { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { useCustomTheme } from '../../../../theme/CustomeThemeProvider';
import { Link } from 'react-router-dom';
import ProfileDialog from '../SideBar/ProfileDialog';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Tooltip from '@mui/material/Tooltip';
import { Fade, IconButton } from '@mui/material';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(p: any) {
    const themes = useTheme()
    const { themeType, setThemeType } = useCustomTheme();
    const [isMenu, setIsMenu] = useState(false)
    return (
        <NavbarSection theme={themes}>
            <div className='nav_bar '>
                <div className='right_navbar flex items-center justify-end'>
                    <div className='mr-auto menu_btn'>
                        <button onClick={() => { setIsMenu(!isMenu) }}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div>
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 200 }}
                            title="Search"
                            className='tool_tip_box'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 200 }}
                            title="Notifications"
                            className='tool_tip_box'>
                            <IconButton>
                                <NotificationsActiveIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 200 }}
                            title="Language"
                            className='tool_tip_box'>
                            <IconButton>
                                <LanguageIcon />
                            </IconButton>
                        </Tooltip>
                    </div>

                    {/* <div className='theme_icon'><button onClick={() => { themeType === 'metronTheme' ? setThemeType('MetronTestTheme') : setThemeType('MetronTheme'); }}><MdDarkMode /></button></div> */}
                    <ProfileDialog />
                </div>
            </div>
            <div className='slide_sidebar'>
                <button className={isMenu ? 'close_btn view' : 'close_btn '} onClick={() => { setIsMenu(!isMenu) }}> </button>
                <div className={isMenu ? 'main_sidebar view' : 'main_sidebar'}><SideBar /></div>
            </div>
        </NavbarSection>
    )
}
const NavbarSection = styled.section`
    background:${p => p.theme.paper};
    position: sticky;
    width: 100%;
    top: 0px;
    padding: 10px 20px;
    z-index:9;
.slide_sidebar{
    display:none;
    @media (max-width:1200px){
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        transition: all 1s;
    }
}
.main_sidebar {
    z-index: 9;
    left: -400px;
    position: fixed;
    transition:all 1s;
}
.main_sidebar.view{
    left:0px;
}
button.close_btn {
    backdrop-filter: blur(4px);
    width: 100%;
    height: 100%;
    position: fixed;
    display: none;
}
button.close_btn.view{
    display:block;
}
.menu_btn{
    display:none;
    @media (max-width:1200px){ 
        display: block;
    }
}
.right_navbar svg{
    color:${props => rgba(props.theme.primary, 1)};
}
.theme_icon svg {
    font-size: 26px;
}
.tool_tip_box {
    padding: 12px;
    border-radius: 16px;
    border: 2px solid #ff000000;
}
.tool_tip_box:hover {
    background:${p => rgba(p.theme.primary, 0.2)};
}
`
