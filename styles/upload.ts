import { Box, styled } from '@mui/material';
import { pink } from '@mui/material/colors';

export const UploadWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '400px',
	border: '2px dashed gray',
	borderRadius: '5px',
	cursor: 'pointer',
	transition: 'all .2s ease-in-out',
	':hover': { 
		borderColor: pink[400],
	},
}));
