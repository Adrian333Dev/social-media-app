import { NextPage } from 'next';

// ! Material-UI & Icons
import { Box, Fab, Tooltip, Typography } from '@mui/material';

import { topics } from '../../utils/constants';

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const Discover: NextPage<Props> = ({ open, setOpen }) => {
	const WrappedTopic = ({ topic }: { topic: any }) => (
		<Tooltip title={topic.name} placement='right'>
			<Fab
				sx={{
					padding: '3px',
				}}
				size='small'
				color='primary'
			>
				{topic.icon}
			</Fab>
		</Tooltip>
	);

	const FullTopic = ({ topic }: { topic: any }) => (
		<Fab variant='extended' size='small' color='primary'>
			{topic.icon}
			<Typography variant='caption' ml={0.5}>
				{topic.name}
			</Typography>
		</Fab>
	);
	const Topics = topics.map((topic) =>
		open ? (
			<FullTopic key={topic.name} topic={topic} />
		) : (
			<WrappedTopic key={topic.name} topic={topic} />
		)
	);
	return (
		<Box p={1} py={2}>
			<Typography
				pb={2}
				sx={{
					display: open ? 'inline-block' : 'none',
				}}
			>
				Popular Topics
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: open ? 'flex-start' : 'center',

					gap: 1,
				}}
			>
				{Topics}
			</Box>
		</Box>
	);
};

export default Discover;
