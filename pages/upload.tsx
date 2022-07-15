import {
	Box,
	Button,
	Card,
	CardContent,
	CircularProgress,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { NextPage } from 'next';
import { useState } from 'react';
import { UploadWrapper } from '../styles/upload';
import { pink } from '@mui/material/colors';

const Upload: NextPage = () => {
	const [file, setFile] = useState<any | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleVideoUpload = async (e: any) => {
		const files = e.target.files;
		if (files) {
			setFile(files[0]);
		}
	};
	return (
		<Container maxWidth='md'>
			<Card sx={{ paddingInline: 3, marginTop: 1 }}>
				<CardContent>
					<Typography variant='h5'>Upload Video</Typography>
					<Typography color='primary'>Post a video to your account</Typography>
					<Grid container spacing={2} pt={3}>
						<Grid item xs={12} md={4}>
							<UploadWrapper>
								{isLoading ? (
									<CircularProgress />
								) : (
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											textAlign: 'center',
										}}
									>
										<CloudUploadIcon sx={{ fontSize: '3rem' }} />
										<Typography variant='h6' pb={2}>
											Select video to upload
										</Typography>
										<Typography
											color='primary'
											variant='body2'
											lineHeight={2.3}
											pb={3}
										>
											MP4 or WebM or ogg <br />
											720x1280 resolution or higher <br />
											Up to 10 minutes <br />
											Up to 2GB
										</Typography>
										<Typography
											sx={{
												backgroundColor: pink[400],
												borderRadius: '3px',
												padding: '10px 28px',
											}}
										>
											Select File
										</Typography>
									</Box>
								)}
							</UploadWrapper>
						</Grid>
						<Grid item xs={12} md={8}>
							tow
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
};

export default Upload;
