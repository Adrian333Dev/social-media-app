import { FC } from 'react';
import axios from 'axios';
import { IVideo } from '../types';
import {VideoCard} from '../components/exports';

interface Props {
	videos: IVideo[];
}

const Home: FC<Props> = ({ videos }) => {
	return (
		<div>
			{videos.map((video) => (
				<VideoCard key={video._id} post={video} />
			))}
		</div>
	);
};

export const getServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/post');
	return {
		props: {
			videos: data,
		},
	};
};

export default Home;
