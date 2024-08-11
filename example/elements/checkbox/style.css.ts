import { globalStyle, style } from '@vanilla-extract/css'
import { OUTLINE_COLOR, THEME_COLOR, vars } from '../../theme.css'

export const checkboxStyle = style({
	width: '6rem',
	height: '6rem',
	borderRadius: '2rem',
	margin: '0',
	appearance: 'none',
	border: `0.5rem solid ${vars.color.L4}`,
	backgroundColor: vars.color.L1,
	display: 'block',
	transition: vars.timing.ease,
	position: 'relative',
	outlineColor: OUTLINE_COLOR,
	':active': {
		transform: 'scale(0.95) rotate(-1deg)',
	},
	'::after': {
		transition: vars.timing.ease,
		content: '""',
		width: '3rem',
		height: '3rem',
		margin: '1rem',
		borderRadius: '1rem',
		transform: 'scale(0.5) rotate(-15deg)',
		backgroundColor: THEME_COLOR,
		display: 'block',
		opacity: 0,
	},
	':checked': {
		borderColor: THEME_COLOR,
	},
	'::before': {
		transition: vars.timing.ease,
		content: '값을 변경할 수 없어요',
		color: vars.color.L6,
		display: 'block',
		width: '30rem',
		position: 'absolute',
		backgroundColor: vars.color.L1,
		border: `1px solid ${vars.color.L4}`,
		borderRadius: '3rem',
		padding: '2rem 3rem',
		zIndex: 1,
		left: '8rem',
		top: '-2rem',
		boxShadow: vars.shadow.elevated,
		opacity: 0,
	},
	selectors: {
		'&[disabled]': {
			filter: 'grayscale(100%)',
		},
		'&[disabled]:hover::before': {
			left: '9rem',
			opacity: 1,
		},
	},
})

globalStyle(`.${checkboxStyle}:checked::after`, {
	transform: 'scale(1)',
	opacity: 1,
})
