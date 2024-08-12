import { style } from '@vanilla-extract/css'
import { FOCUS_OUTLINE, shake, shakeSmall, vars } from '../theme.css'

export const wrapperStyle = style({
	border: `1px solid ${vars.color.L3}`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	boxSizing: 'border-box',
	backgroundColor: vars.color.L1,
	borderRadius: '3rem',
	overflow: 'hidden',
	transition: 'all 0.3s',
	selectors: {
		'&:hover': {
			borderColor: vars.color.L5,
		},
		'&:active': {
			transform: 'scale(0.98)',
			borderColor: vars.color.L8,
		},
		'&:focus-within': {
			borderColor: vars.color.L7,
		},
		'&:has(input[disabled])': {
			borderWidth: '2px',
		},
	},
})

export const inputStyle = style({
	padding: `3rem 4rem`,
	outline: 'none',
	border: 'none',
	backgroundColor: 'transparent',
	flex: 1,

	color: vars.color.L9,
	'::placeholder': {
		color: vars.color.L7,
		transition: vars.timing.ease,
	},
	selectors: {
		'&:disabled::placeholder': {
			color: vars.color.L6,
		},
		'&[type=color]': {
			height: '11rem',
			width: '20rem',
			flex: 'revert',
		},
		'&::-webkit-calendar-picker-indicator': {
			display: 'none',
		},
		[`.${wrapperStyle}:hover > &:disabled::placeholder`]: {
			color: vars.color.L5,
		},
	},
})

export const inputTypeWrapperStyle = style({
	width: '4rem',
	height: '4rem',
	color: vars.color.L7,
	transition: vars.timing.ease,
	paddingInlineEnd: '4rem',
	[`.${wrapperStyle}:hover > input:disabled + &`]: {
		color: vars.color.L9,
		width: '5rem',
		height: '5rem',
		paddingInlineEnd: `3.5rem`,
	},

	position: 'relative',
	'::before': {
		content: '입력 할 수 없습니다',
		color: vars.color.L6,
		display: 'block',
		width: '32rem',
		position: 'absolute',
		backgroundColor: vars.color.L1,
		border: `1px solid ${vars.color.L4}`,
		borderRadius: '3rem',
		padding: '2rem 3rem',
		zIndex: 1,
		right: '0rem',
		boxShadow: vars.shadow.elevated,
		bottom: '-12rem',
		opacity: 0,
		transition: vars.timing.ease,
	},
	[`.${wrapperStyle}:hover > input:disabled + &::before`]: {
		animation: `${shakeSmall} 1s infinite`,
		opacity: 1,
		bottom: '-14rem',
	},
})

export const inputTypeIconStyle = style({
	width: '100%',
	height: '100%',
	[`.${wrapperStyle}:hover > input:disabled + span > &`]: {
		animation: `${shake} 1s infinite`,
	},
})
