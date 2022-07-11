import { Box, styled } from '@mui/material';

export const VideoContainer = styled(Box)(({ theme }) => ({
	paddingTop: theme.spacing(2),
	position: 'relative',
  display: 'inline-block',
	'& .MuiIconButton-root': {
		display: 'none',
	},
	'&:hover': {
		'& .MuiIconButton-root': {
			display: 'block',
		},
  },

}));

export const VideoMedia = styled('video')(({ theme }) => ({
  cursor: 'pointer',
  width: 600,
  maxWidth: '100%',
  height: 500,
  maxHeight: '100%',
  backgroundColor: theme.palette.background.paper,
}));
