import React, { useEffect, useState } from 'react';
import MAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Pages } from './placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { ThemeConsumer, useTheme } from 'styled-components'
import { rgba } from 'polished'
import { faAngleDoubleLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function SideBar() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [menu, setMenu] = useState(true);
    const [pageLinks, setPageLinks] = useState(Pages)
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const theme = useTheme()

    const width = window.innerWidth;
    useEffect(() => {
        if (width <= 768) {
            setMenu(false)
        }
    }, [width])

    console.log('----------', pageLinks[0].menus[0].subMenu.length)
    return (
        <SidebarSection >

            <LogoSection>
                <button className='mobile_menu_btn' onClick={() => { setMenu(!menu) }}><FontAwesomeIcon icon={faBars} /></button>

                <div className={menu ? 'logo large_logo' : 'logo sm_logo'} ><img src={menu ? './svg/m_logo.svg' : './svg/small_logo.svg'} /></div>
                <div className='small_logo'><img src='./svg/small_logo.svg' /></div>
                <button className={menu ? 'colab_btn' : 'colab_btn hide'} onClick={() => { setMenu(!menu) }}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
            </LogoSection>
            <SideMenu theme={theme} className={menu ? '' : 'menu_hide'}>
                {pageLinks.map((i, ix) => {
                    return (
                        <div key={ix}>
                            <>
                                <h1 className={menu ? 'title_text' : 'title_text hide'}>{i.Label}</h1>
                                {i.menus.map((m) => {
                                    return (
                                        m.subMenu.length > 0 ? <Accordion expanded={expanded === `pannel${m.id}`} onChange={handleChange(`pannel${m.id}`)}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                                className={menu ? 'accordian' : 'accordian hide'}
                                            >
                                                <Typography sx={{ color: 'text.secondary' }} >
                                                    <span className={menu ? 'menu_title' : 'menu_title hide'}>
                                                        {m.icon &&
                                                            <FontAwesomeIcon icon={m.icon} />}
                                                        <p>{m.name}</p></span>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className={menu ? 'accordian_details' : 'accordian_details hide'}>
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
                                                <div className={menu ? 'sidebar_menu_links' : 'sidebar_menu_links hide'}>
                                                    <Link to={m.url}><FontAwesomeIcon icon={m.icon} /><span>{m.name}</span></Link>
                                                </div>
                                            </>
                                    )
                                })}
                            </>
                        </div>
                    )
                })}
            </SideMenu>
            <button className={menu ? 'mobile_close_btn' : 'mobile_close_btn close'} onClick={() => { setMenu(!menu) }}>

            </button>
        </SidebarSection>
    );
}
const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 999;
    background-color:${p => p.theme.pure};
    @media (max-width:786px){
        position: fixed;
    }
.mobile_close_btn{
    @media (max-width:768px){
    height: 100%;
    position: fixed;
    top: 65px;
    width: 100%;
    background: #000000ba;
    left: 0px;
    }
}
button.mobile_close_btn.close {
    width: 0px;
}
`
const LogoSection = styled.div`
    color: red;
    position: sticky;
    top: 0px;
    background:${p => p.theme.paper};
    height: 64px;
    display: flex;
    align-items: center;
    border: 1px dashed #ffffff57;
    border-width: 0px 0px 1px 0px;
    z-index: 9;
    justify-content: space-between;
    padding-left: 20px;
    @media (max-width:768px){
        border:none;
        /* gap: 20px; */
    }
button.colab_btn {
    background-color: #2a2a3c;
    padding: 6px 10px;
    z-index: 9;
    margin-right: -18px;
    border-radius: 6px;
    @media (max-width:768px){
        display:none;
    }
}
button.colab_btn svg {
    transition: all 0.8s;
    color:${p => p.theme.primary};
}
button.colab_btn.hide svg {
    transform: rotate(180deg);
}
.large_logo img {
    width: 150px;
    @media (max-width:768px){
        width: 42px;
    }
}
.sm_logo img{
    width: 42px;
}
.logo {
    gap: 14px;
    display: flex;
    align-items: center;
    position: relative;
    @media (max-width:768px){
        display:none;
    }
}

.small_logo{
    display:none;
    @media (max-width:768px){
        display:block;
    }
}
.small_logo img{
    width: 42px;
}

button.mobile_menu_btn{
    display:none;
    @media (max-width:768px){
        display: block;
        width: 50px;
    }
}
.mobile_menu_btn svg {
    font-size: 22px;
    margin-top: 16px;
    color:${p => rgba(p.theme.pure, 0.5)};
   
}
`
const SideMenu = styled.section`
background-color: ${props => props.theme.paper};
padding: 20px;
width: 270px;
overflow-y: scroll;
height: 100vh;
transition: width 0.5s;
@media (max-width:768px){
    padding: 8px;
    width: 216px;
}
&.menu_hide{
    width: 84px;
    @media (max-width:786px){
    left: -230px;
    width:0px;
    }
}

@media (max-width:786px){
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 9;
    transition: all 0.6s;
}

h1.title_text{
    color:${props => rgba(props.theme.pure, 0.6)};
    font-size:13px;
    padding: 20px 0px;
    transition: opacity 0.2s;
    text-align:left;
}
h1.title_text.hide {
    opacity: 0;
}
.menu_title{
    color: ${p => rgba(p.theme.pure, 0.6)};
    font-size: 14px;
    display: flex;
    align-items: center;
    position:relative;
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
}
.menu_title.hide p {
    width: 0px;
}
.sidebar_menu_links{
    color: ${p => rgba(p.theme.pure, 0.6)};
    padding-left: 16px;
    margin: 12px 0px 10px 0px;
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
.sidebar_menu_links.hide span {
    visibility:hidden;
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
