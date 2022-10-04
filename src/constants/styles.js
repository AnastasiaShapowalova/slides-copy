const STYLES = {
	COLORS: {
		accent: {
			name: 'accent',
			var: '--accent',
			defaultValue: '#00c0ff'
		},
		neutral: {
			name: 'neutral',
			var: '--neutral',
			defaultValue: '#374448'
		},
		white: {
			name: 'white',
			var: '--neutral',
			defaultValue: '#fff'
		},
		black: {
			name: 'black',
			var: '--neutral',
			defaultValue: '#000'
		}
	},
	FONT_SIZES: {
		h1: { 
			name: 'h1',
			var: '--fs-h1',
			defaultValue: '48px'
		},
		h2: { 
			name: 'h2',
			var: '--fs-h2',
			defaultValue: '40px'
		},
		h3: { 
			name: 'h3',
			var: '--fs-h3',
			defaultValue: '32px'
		},
		h4: { 
			name: 'h4',
			var: '--fs-h4',
			defaultValue: '24px'
		},
		h5: { 
			name: 'h5',
			var: '--fs-h5',
			defaultValue: '20px'
		},
		h6: { 
			name: 'h6',
			var: '--fs-h6',
			defaultValue: '16px'
		},
		body1: { 
			name: 'body1',
			var: '--fs-body1',
			defaultValue: '16px'
		},
		body2: { 
			name: 'body2',
			var: '--fs-body2',
			defaultValue: '14px'
		},
		caption1: { 
			name: 'caption1',
			var: '--fs-caption1',
			defaultValue: '12px'
		},
		caption2: { 
			name: 'caption2',
			var: '--fs-caption2',
			defaultValue: '10px'
		},
	},
	LINE_HEIGHTS: {
		h2: { name: 'h2', var: '--lh-h2'},
		h1: { name: 'h1', var: '--lh-h1'},
		h3: { name: 'h3', var: '--lh-h3'},
		h4: { name: 'h4', var: '--lh-h4'},
		h5: { name: 'h5', var: '--lh-h5'},
		h6: { name: 'h6', var: '--lh-h6'},
		body1: { name: 'body1', var: '--lh-body1'},
		body2: { name: 'body2', var: '--lh-body2'},
		caption1: { name: 'caption1', var: '--lh-caption1'},
		caption2: { name: 'caption2', var: '--lh-caption2'},
	},
	TEXT_COLORS: {
		default: {
			name: 'default',
			var: '--text-default',
			defaultValue: 'var(--neutral)'
		},
		accent: {
			name: 'accent',
			var: '--text-accent',
			defaultValue: 'var(--accent)'
		},
		_options: [
			{
				name: 'accent',
				var: '--accent',
				value: 'var(--accent)'
			},
			{
				name: 'neutral',
				var: '--neutral',
				value: 'var(--neutral)'
			},
			{
				name: 'white',
				var: '--white',
				value: 'var(--white)'
			},
			{
				name: 'black',
				var: '--black',
				value: 'var(--black)'
			}
		]
	},
	BACKGROUNDS: {
		primary: { name: 'primary', var: '--background-primary'},
		secondary: { name: 'secondary', var: '--background-secondary'},
		tetriary: { name: 'tetriary', var: '--background-tetriary'}
	},
	SCREEN_BACKGROUNDS: {
		default: { name: 'default', var: '--screen-bg-default'},
		accent: { name: 'accent', var: '--screen-bg-accent'},
		dark: { name: 'dark', var: '--screen-bg-dark' }
	}
}

export default STYLES