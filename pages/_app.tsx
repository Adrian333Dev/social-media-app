import Head from 'next/head';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { useEffect, useState } from 'react';

import createEmotionCache from '../utils/createEmotionCache';
import { ColorModeProvider } from '../styles/theme/ColorModeContext';
import { Layout } from '../components/exports';
import MiniDrawer from '../components/sidebar/Sidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const [isSSR, setIsSSR] = useState(true);
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<>
			<GoogleOAuthProvider
				clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
			>
				<CacheProvider value={emotionCache}>
					<ColorModeProvider>
						<CssBaseline />
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ColorModeProvider>
				</CacheProvider>
			</GoogleOAuthProvider>
		</>
	);
}
