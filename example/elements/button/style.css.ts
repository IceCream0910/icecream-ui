import { globalStyle, style } from '@vanilla-extract/css'
import { FOCUS_OUTLINE, THEME_COLOR, vars } from '../../theme.css'

export const buttonStyle = style({
	backgroundColor: `var(--button-color-bg, ${vars.color.L9})`,
	color: `var(--button-color-text, ${vars.color.L1})`,
	padding: 'var(--button-padding, 2rem 5rem)',
	borderRadius: '3rem',
	display: 'flex',
	cursor: 'var(--button-pointer, pointer)',
	justifyContent: 'center',
	alignItems: 'center',
	outline: 'none',
	gap: '1rem',
	transition:
		`all 0.3s`,
	selectors: {
		'&:hover:not([disabled])': {
			transform: 'scale(1.02)',
		},
		'&:active:not([disabled])': {
			transform: 'scale(0.98)',
		},
		'&[size="big"]': {
			padding: 'var(--button-padding-big, 3rem 5rem)',
		},
		'&[size="bigger"]': {
			padding: 'var(--button-padding-bigger, 4rem 5rem)',
		},
	},
})

export const accentButton = style({
	vars: {
		'--button-color-bg': THEME_COLOR,
		'--button-color-text': vars.color.L1,
	},
})

export const secondaryButton = style({
	vars: {
		'--button-color-bg': vars.color.L7,
		'--button-color-text': vars.color.L1,
	},
})

export const ghostButton = style({
	vars: {
		'--button-color-bg': vars.color.L3,
		'--button-color-text': vars.color.L9,
	},
})

export const dangerButton = style({
	vars: {
		'--button-color-bg': vars.color.danger,
		'--button-color-text': vars.color.L1,
	},
})

export const disabledButton = style({
	vars: {
		'--button-color-bg': vars.color.L3,
		'--button-color-text': vars.color.L7,
		'--button-pointer': 'not-allowed',
	},
})

export const loadingIcon = style({
	width: '4rem',
	height: '4rem',
	display: 'none',
})

globalStyle(`.${loadingIcon} > svg`, {
	width: '100%',
	height: '100%',
})

globalStyle(`.${buttonStyle} > img`, {
	width: '4rem',
	height: '4rem',
	filter: 'invert(1)',
})

globalStyle(`.${ghostButton} > img`, {
	filter: 'invert(0.2)',
})

globalStyle(`.${disabledButton} > img`, {
	filter: 'invert(0.5)',
})

globalStyle(`a:has(> .${buttonStyle})`, {
	textDecoration: 'none',
})
