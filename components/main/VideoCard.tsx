import { useRef, useState } from 'react';

// ! Material-UI & Icons
import {
	Avatar,
	Box,
	Checkbox,
	Container,
	Toolbar,
	Typography,
	IconButton,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { NextPage } from 'next';
import { IVideo } from '../../types';
import { VideoContainer, VideoMedia } from '../styles/main';

interface Props {
	post: IVideo;
}

const VideoCard: NextPage<Props> = ({
	post: {
		postedBy: { userName, image },
		video: {
			asset: { url },
		},
	},
}) => {

	const AccountDetails = () => {
		return (
			<Toolbar
				sx={{
					display: 'flex',
					gap: 2,
				}}
			>
				<Avatar alt={userName} src={image ? image : ''} />
				<Box>
					<Box display='flex'>
						<Typography variant='h6'>{userName}</Typography>

						<Checkbox
							defaultChecked
							disabled
							checkedIcon={<CheckCircleIcon fontSize='small' />}
							sx={{
								'&.Mui-checked': {
									color: blue[400],
								},
								position: 'relative',
								top: '-5px',
							}}
						/>
						<Typography variant='body1' color='primary.main' pt={'3px'}>
							{userName}
						</Typography>
					</Box>
				</Box>
			</Toolbar>
		);
	};

	const VideoPlayer = () => {
		return (
			<Container
				maxWidth='md' 
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					paddingInlines: '0px',
				}}
			>
				<VideoContainer>
					<VideoMedia src={url} loop controls></VideoMedia>

					<Box
						sx={{
							position: 'absolute',
							display: 'flex',
							bottom: 30,
						}}
					></Box>
				</VideoContainer>
			</Container>
		);
	};

	return (
		<Box pb={6} borderBottom={1}>
			<AccountDetails />
			<VideoPlayer />
		</Box>
	);
};

export default VideoCard;
