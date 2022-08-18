import React, { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import styled, { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { useCustomTheme } from '../../../../theme/CustomeThemeProvider';
import { Link } from 'react-router-dom';

export default function NavBar(p: any) {
    const [profile, setProfile] = useState(false)
    const themes = useTheme()

    const { themeType, setThemeType } = useCustomTheme();
    console.log('dd', themeType)
    return (
        <NAvbarSection theme={themes}>
            <div className='nav_bar '>
                <div className='right_navbar flex gap-4 items-center justify-end'>
                    {/* <a href='/table' className='test_link'>Tabel</a> */}
                    <Link to="/" className='menu_link'>Home</Link>
                    <Link to="table" className='menu_link'>Table</Link>

                    <div className='theme_icon'><button onClick={() => { themeType === 'metronTheme' ? setThemeType('MetronTestTheme') : setThemeType('MetronTheme'); }}><MdDarkMode /></button></div>
                    <div className='profile'>
                        <button onClick={() => { setProfile(!profile) }} ><img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' /></button>
                        <div className={profile ? 'profile_dialog dialog_on' : 'profile_dialog '}>
                            <div className='user_image flex items-center gap-6'>
                                <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
                                <div>
                                    <h1>Delta 4 infotech</h1>
                                    <p>Delta@gmail.com</p>
                                </div>
                            </div>
                            <hr />
                            <ul className='profile_menu'>
                                <li>My Profile </li>
                                <li>My Profile </li>
                                <li>My Profile </li>
                                <li>My Profile </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </NAvbarSection>
    )
}
const NAvbarSection = styled.section`
    background:${p => p.theme.paper};
    position: sticky;
    width: 100%;
    top: 0px;
    padding: 10px 20px;
    height: 64px;
    z-index:9;
.right_navbar svg{
    color:${props => rgba(props.theme.pure, 0.6)};
}
.profile{
    position: relative;
}
.profile_dialog{
    position: absolute;
    right: 0px;
    background-color:${props => props.theme.base};
    color:${props => props.theme.pure};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    width: 300px;
    padding: 16px;
    top: 56px;
    border-radius: 4px;
    transition:all 0.4s;
    visibility: hidden;
    transform:translateY(10px);
}
.profile_dialog.dialog_on{
    transform:translateY(0px);
    visibility: visible;
    
}
.profile button img {
    width: 40px;
}

.user_image {
    width: 40px;
}
.profile_menu li{
padding:10px 0px;
}
.profile_dialog hr{
    margin:20px 0px;
}
a.menu_link {
    color: ${props => props.theme.pure};
}
`
