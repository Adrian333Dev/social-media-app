/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

import { Toolbar, IconButton, Box, Avatar, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

import { AppBar } from '../styles/layout';
import { useRouter } from 'next/router';

import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../../utils';

import useAuthStore from '../../app/authStore';

export interface NavProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const Navbar: NextPage<NavProps> = ({ open, setOpen }) => {
	const router = useRouter();
	const { userProfile, addUser } = useAuthStore();

	const MenuBtn = () => {
		return (
			<IconButton
				color='inherit'
				aria-label='open drawer'
				onClick={() => setOpen(true)}
				edge='start'
				sx={{
					marginRight: 5,
					...(open && { display: 'none' }),
				}}
			>
				<MenuIcon />
			</IconButton>
		);
	};

	const Logo = () => {
		return (
			<IconButton onClick={() => router.push('/')} sx={{ marginRight: 2 }}>
				<FontAwesomeIcon icon={faCirclePlay} fontSize='2rem' color='#e91e63' />
			</IconButton>
		);
	};

	const Menu = () => {
		return (
			<Box display='flex' gap={1}>
				<Button startIcon={<AddIcon />}
					onClick={() => router.push('/upload')}
				>Upload</Button>
				<Avatar src={userProfile?.image} />
				<IconButton
					onClick={() => {
						googleLogout();
						addUser(null);
						router.push('/');
					}}
				>
					<LogoutIcon />
				</IconButton>
			</Box>
		);
	};

	return (
		<AppBar position='fixed' open={open}>
			<Toolbar>
				<MenuBtn />
				<Logo />
				<Box flexGrow={1}>SEARCH</Box>
				{userProfile ? (
					<Menu />
				) : (
					<GoogleLogin
						onSuccess={(res) => createOrGetUser(res, addUser)}
						onError={() => console.log('error')}
					/>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
