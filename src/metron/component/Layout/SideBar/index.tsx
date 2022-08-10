import * as React from 'react';
import MAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Pages } from './placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { ThemeConsumer, useTheme } from 'styled-components'
import { rgba } from 'polished'
import { faGrin, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function SideBar() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const theme = useTheme()
    return (
        <SidebarSection>
            <LogoSection>
                <div className="logo"><img src='./images/logo.png' /> Delta</div>
                <button className="colab_btn"><FontAwesomeIcon icon={faArrowRight} /></button>
            </LogoSection>
            <SideMenu theme={theme}>
                {/* Dashboard Component ++ */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <span className='menu_title'><FontAwesomeIcon icon={faGrin} /> Dashboard</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <li className="submenu_list"><a href='#'>One</a></li>
                            <li className="submenu_list"><a href='#'>One</a></li>
                            <li className="submenu_list"><a href='#'>One</a></li>
                        </Typography>
                        <button className='show_btn'>Show More <FontAwesomeIcon icon={faPlus} /></button>
                    </AccordionDetails>

                </Accordion>
                {/* Dashboard Component -- */}

                {Pages.map((i, ix) => {
                    return (
                        <div key={ix}>
                            <>
                                <h1 className="title_text">{i.Label}</h1>
                                {i.menus.map((m) => {
                                    return (
                                        <Accordion expanded={expanded === `pannel${m.id}`} onChange={handleChange(`pannel${m.id}`)}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >
                                                <Typography sx={{ color: 'text.secondary' }}>
                                                    <span className='menu_title'>
                                                        {m.icon &&
                                                            <FontAwesomeIcon icon={m.icon} />}
                                                        {m.name}</span></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {m.subMenu.map((menu) => {
                                                        return (
                                                            <li className="submenu_list"><a href='#'>{menu.name}</a></li>
                                                        )
                                                    })}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </>
                        </div>
                    )
                })}
            </SideMenu>
        </SidebarSection>
    );
}
const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
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
button.colab_btn {
    background-color: #2a2a3c;
    padding: 6px 10px;
    z-index: 9;
    margin-right: -25px;
}
.logo img {
    width: 56px;
}
.logo {
    gap: 14px;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #de253a;
    font-weight: 900;
}
`
const SideMenu = styled.section`
background-color: ${props => props.theme.paper};
padding: 20px;
width: 270px;
overflow-y: scroll;
    height: 100vh;
h1.title_text{
    color:${props => rgba(props.theme.pure, 0.6)};
    font-size:13px;
    padding: 20px 0px;
}
.menu_title{
    color: ${p => rgba(p.theme.pure, 0.6)};
    font-size: 14px;
    display: flex;
    align-items: center;
}

.menu_title svg{
    padding: 0px 16px 0px 0px;
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

`;
