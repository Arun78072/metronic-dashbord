import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import MDialog from '@mui/material/Dialog';
import styled, { useTheme } from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
    const theme = useTheme()
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (

        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <div className='profile_box flex gap-2 items-center text-left'>
                    <img src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80' className='w-[40px] h-[40px] rounded-md' />
                    <div>
                        <h1 className=''>Rachael Simons</h1>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <Link to='/' className='on_click'><ListItemText primary={email} /></Link>
                    </ListItem>
                ))}
                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')} className='sign_out'>
                    <ListItemText primary="Sign out" />
                </ListItem>
            </List>
        </Dialog>
    );
}
export default SimpleDialog
const emails = ['Profile', 'Inbox', 'Projects'];

const Dialog = styled(MDialog)`
    backdrop-filter: blur(3px);
    && .MuiDialog-paper {
        background: ${p => p.theme.paper};
        width: 260px;
        padding: 14px;
    }
    && .MuiDialog-scrollPaper{
        display:unset;
    }
    .MuiTypography-h6{
        padding: 14px 10px;
    }
    a.on_click , .sign_out {
        width: 100%;
        color:${p => p.theme.pure};
    }
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
            color: ${p => rgba(p.theme.pure, 0.6)};
            font-weight:600;
            line-height: 22px;
            font-size: 16px;
        }
        p{
            color: ${p => rgba(p.theme.pure, 0.4)};
            font-weight:400;
            font-size: 14px;
            line-height: 14px;
        }
    }    
`