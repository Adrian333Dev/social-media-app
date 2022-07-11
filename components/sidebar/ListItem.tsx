import { NextPage } from 'next';

// ! Material-UI & Icons
import {
	ListItem as ListItm,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { pink } from '@mui/material/colors';
import { useRouter } from 'next/router';

interface ListItemProps {
	open: boolean;
}

const ListItem: NextPage<ListItemProps> = ({ open }) => {
	const { pathname } = useRouter();
	const isActive = pathname === '/';
	
	return (
		<ListItm disablePadding sx={{ display: 'block' }}>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyContent: open ? 'initial' : 'center',
					px: 2.5,
					color: isActive ? pink[400] : 'inherit',
				}}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: open ? 3 : 'auto',
						justifyContent: 'center',
					}}
				>
					<HomeOutlinedIcon />
				</ListItemIcon>
				<ListItemText disableTypography sx={{ opacity: open ? 1 : 0 }}>
					<Typography fontWeight={'bold'}>For You</Typography>
				</ListItemText>
			</ListItemButton>
		</ListItm>
	);
};

export default ListItem;
