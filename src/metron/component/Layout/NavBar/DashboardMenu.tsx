import React from 'react'
import styled, { useTheme } from 'styled-components'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { metronTheme } from '../../../../theme/metron'
import { ThemeProvider } from 'styled-components';
import { useCustomTheme } from '../../../../theme/CustomeThemeProvider';

export default function DashboardMenu() {
    const theme = useCustomTheme();
    const theme2 = useTheme()
    // const { themeType } = theme;
    // console.log('---ThemeProvider----', theme2)
    // console.log('---ThemeProvider----', themeType)
    return (
        <MenuSection>
            <h1 className="test_theme">test this </h1>
            <div className='sub_menu_container flex'>
                <div className='left_sub_menu bg-[#1d1b2a] w-2/3'>
                    <div className='left_menus grid grid-cols-2 '>
                        {dashboardMenu.map((d, dx) => {
                            return (
                                <div className='flex items-center child_left_menus cursor-pointer' key={dx}>
                                    {d.url}
                                    <div>
                                        <h3>{d.name}</h3>
                                        <p>{d.subName}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex items-center '>
                        <div>
                            <h3>Landing Page Template</h3>
                            <p>Onpe page landing template with pricing & others</p>
                        </div>
                        <button className='primary_btn'>Explore</button>
                    </div>
                </div>
                <div className='sub_menu_more_dashboard bg-[#2c2940] w-1/3'>
                    <h3>More Dashboard</h3>
                    <div>
                        {moreDashboard.map((i, ix) => {
                            return (
                                <div key={ix}>
                                    <a href={i.link} >{i.name}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </MenuSection>
    )
}
const MenuSection = styled.section`
border-radius:10px;
.left_menus svg {
    font-size: 40px;
}
.child_left_menus:hover svg {
color:green;
}
.test_theme{
    background-color:green;
    color:${metronTheme.primary}
}
`
const moreDashboard = [
    {
        id: 1,
        name: 'Logistics',
        link: '#',
    },
    {
        id: 2,
        name: 'Website Analytics',
        link: '#',
    },
    {
        id: 3,
        name: 'Finance Performance',
        link: '#',
    },
    {
        id: 4,
        name: 'Store Analytics',
        link: '#',
    },
    {
        id: 5,
        name: 'Social',
        link: '#',
    },
    {
        id: 6,
        name: 'Delivery',
        link: '#',
    },
    {
        id: 7,
        name: 'Crypto',
        link: '#',
    },
    {
        id: 8,
        name: 'School',
        link: '#',
    },
    {
        id: 9,
        name: 'Podcast',
        link: '#',
    },
]
const dashboardMenu = [
    {
        id: 1,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 2,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 3,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 4,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 5,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 6,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 7,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
    {
        id: 8,
        name: 'Default',
        subName: 'Reports & statistics',
        iconLink: '',
        url: <AiOutlineAppstoreAdd />,
    },
]