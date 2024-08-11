import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const chipStyle = style({
	borderRadius: '3rem',
	backgroundColor: vars.color.L2,
	color: vars.color.L9,
	padding: '2rem 3rem',
	width: 'fit-content',
	display: 'inline-block',
	whiteSpace: 'nowrap',
})
