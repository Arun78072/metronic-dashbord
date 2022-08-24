import React, { useEffect, useState } from 'react';
import MAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PagesLink } from './placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { ThemeConsumer, useTheme } from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ProfileDialog from './ProfileDialog';
export default function SideBar() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [menu, setMenu] = useState(true);
    const [pageLinks, setPageLinks] = useState(PagesLink)
    const theme = useTheme()
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <SidebarSection theme={theme}>
            <div className='fit_content'>
                {/* <button onClick={() => { setMenu(!menu) }}>click</button> */}
                <div className='site_logo'><img src='./svg/small_logo.svg' /></div>
                <div className='profile_card'><ProfileDialog /></div>

                <SideMenu theme={theme} >
                    {pageLinks.map((i, ix) => {
                        return (
                            <div key={ix}>
                                <>
                                    <h1 className='title_text'>{i.Label}</h1>
                                    {i.menus.map((m) => {
                                        return (
                                            m.subMenu.length > 0 ? <Accordion expanded={expanded === `pannel${m.id}`} onChange={handleChange(`pannel${m.id}`)}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                    className='accordian accordian_class'>
                                                    <Typography sx={{ color: 'text.secondary' }} >
                                                        <span className='menu_title'>
                                                            {m.icon &&
                                                                <FontAwesomeIcon icon={m.icon} />}
                                                            <p>{m.name}</p></span>
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className='accordian_details'>
                                                    <Typography>
                                                        {m.subMenu.map((menu: any) => {
                                                            return (
                                                                <li className="submenu_list"><a href='#'>{menu.name}</a></li>
                                                            )
                                                        })}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                                :
                                                <>
                                                    <div className='sidebar_menu_links'>
                                                        <Link to={m.url}><div className="icon"><FontAwesomeIcon icon={m.icon} /></div><span>{m.name}</span></Link>
                                                    </div>
                                                </>
                                        )
                                    })}
                                </>
                            </div>
                        )
                    })}
                </SideMenu>
            </div>
        </SidebarSection>
    );
}
const SidebarSection = styled.div`
    background-color:${p => p.theme.paper};
    width:270px;
    border: 2px solid;
    border-color:${p => rgba(p.theme.pure, 0.2)};
    border-width: 0px 1px 0px 0px;
    .fit_content {
        width: 80%;
        margin: auto;
        padding-top: 20px;
    }
    .site_logo {
        width: 58px;
        img{
            width: 100%;
        }
    }
    .profile_card{
        margin-top:20px;
    }
`
const SideMenu = styled.section`
height: 100vh;

h1.title_text{
    color:${props => rgba(props.theme.pure, 0.2)};
    font-size:14px;
    padding: 16px 0px;
    font-weight: 600;
}

.menu_title{
    color: ${p => rgba(p.theme.pure, 0.6)};
    font-size: 16px;
    display: flex;
    align-items: center;
    position:relative;
    font-weight: 600;
}
.menu_title svg{
    font-size: 20px;
}
li.submenu_list {
    font-size: 14px;
    padding: 10px 0px 10px 18px;
    cursor: pointer;
}
.show_btn{
    color: ${p => (p.theme.primary)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: 600;
}
.menu_title p {
    width: 142px;
    position: absolute;
    left: 30px;
    overflow: hidden;
    text-align:left;
    font-size:14px;
}

.sidebar_menu_links{
    color: ${p => rgba(p.theme.pure, 0.6)};
    margin: 12px 0px 10px 0px;
}
.sidebar_menu_links .icon {
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sidebar_menu_links:hover{
    color: ${p => rgba(p.theme.pure, 1)};
}
.sidebar_menu_links a {
    display: flex;
    align-items: center;
    gap: 14px;
}
.sidebar_menu_links a svg {
    font-size: 20px;
    width: 28px;
}
.sidebar_menu_links span {
    white-space: nowrap;
}
`
const Accordion = styled(MAccordion)`
box-shadow: none !important;
&& {
    background-color: transparent;
}
p.MuiTypography{
    color:${props => props.theme.pure};
}
svg.MuiSvgIcon-fontSizeMedium{
    color:${props => rgba(props.theme.pure, 0.6)};
    font-size:18px;
}
.text_class svg.MuiSvgIcon-fontSizeMedium{
    display: none !important;
}
p.MuiTypography-body1 li{
    color:${props => rgba(props.theme.pure, 0.6)};
}
p.MuiTypography-body1 li:hover{
    color:${props => rgba(props.theme.pure, 1)};
}
div#panel1bh-header .MuiAccordionSummary-content , div#panel1bh-header .Mui-expanded{
    margin: 6px 0;
}
div#panel1bh-header{
    min-height: 38px;
}
div#panel1bh-header:hover .menu_title ,div#panel1bh-header:hover svg.MuiSvgIcon-fontSizeMedium{
    color: ${p => rgba(p.theme.pure, 1)};
}
.Mui-expanded .menu_title , .Mui-expanded svg.MuiSvgIcon-fontSizeMedium{
    color: ${p => rgba(p.theme.pure, 1)};
}
.accordian.hide .MuiAccordionSummary-expandIconWrapper {
    display: none;
}
.accordian_details.hide {
    display: none;
}

`;
