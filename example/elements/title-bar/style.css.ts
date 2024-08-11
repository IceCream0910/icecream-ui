import { style } from '@vanilla-extract/css'
import { FOCUS_OUTLINE, THEME_COLOR, vars } from '../../theme.css'

export const titleBarStyle = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	padding: '1em 1.2em',
	backgroundColor: vars.color.L1,
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'space-between',
	alignContent: 'center',
	alignItems: 'center',
})
