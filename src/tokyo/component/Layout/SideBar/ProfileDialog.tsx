
import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { rgba } from 'polished';
import SimpleDialog from './SimpleDialog';

const emails = ['Profile', 'Inbox', 'Projects'];
export default function ProfileDialog() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const theme = useTheme()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <ProfileSection >
            {/* <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
            </Typography> */}
            <br />
            <Button variant="outlined" onClick={handleClickOpen} className='profile_button'>
                <div className='profile_box flex gap-2 items-center text-left'>
                    <img src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80' className='w-[40px] h-[40px] rounded-md' />
                    <div>
                        <h1 className=''>Rachael Simons</h1>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </ProfileSection>
    );
}
const ProfileSection = styled.section`
    .profile_button {
        width: 100%;
        background: ${p => rgba(p.theme.pure, 0.1)};
        border: 2px solid;
        border-color: transparent;
        border-radius: 8px;
        padding: 6px 8px;
    }
    .profile_button:hover {
        border: 2px solid;
        border-color: transparent;
    }
    .profile_box {
        width: 100%;
        text-transform: capitalize;
         h1 {
            color: ${p => rgba(p.theme.pure, 0.6)};;
            font-weight:600;
            line-height: 22px;
            font-size: 16px;
        }
        p{
            color: ${p => rgba(p.theme.pure, 0.4)};;
            font-weight:400;
            font-size: 14px;
            line-height: 14px;
        }
    }
`


