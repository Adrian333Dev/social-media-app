import { NextPage } from 'next';

// ! Material-UI & Icons
import {
	IconButton,
	Divider,
	List,
	Typography,
	Box,
	Button,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// ! Local
import { Drawer, DrawerHeader } from '../styles/layout';
import { NavProps } from '../layout/Navbar';
import { ListItem, Discover } from '../exports';

const Sidebar: NextPage<NavProps> = ({ open, setOpen }) => {
	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader>
				<IconButton onClick={() => setOpen(false)}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List
				sx={{
					whiteSpace: 'nowrap',
				}}
			>
				<ListItem open={open} />
			</List>
			<Divider />
			<Box
				sx={{
					display: open ? 'block' : 'none',
				}}
			>
				<Box p={1}>
					<Typography gutterBottom>
						Log in to follow creators, like videos, and view comments.
					</Typography>
					<Button fullWidth variant='contained'>
						Login
					</Button>
				</Box>
				<Divider />
			</Box>
			<Discover open={open} setOpen={setOpen} />
		</Drawer>
	);
};

export default Sidebar;
