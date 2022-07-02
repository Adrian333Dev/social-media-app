export const components = {
	MuiAppBar: {
		styleOverrides: {
			root: {
				backgroundImage: 'unset',
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				color: 'inherit',
			},
		},
	},
	MuiCssBaseline: {
		styleOverrides: {
			'& *': {
				'&::-webkit-scrollbar': {
					width: '0.4em',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: 'rgba(0,0,0,.1)',
					outline: '1px solid rgba(255,255,255,.1)',
					borderRadius: '5px',
				},
			},
		},
	},
};
