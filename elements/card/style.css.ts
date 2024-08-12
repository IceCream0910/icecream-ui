import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const cardStyle = style({
	backgroundColor: vars.color.L1,
	border: `1px solid ${vars.color.L3}`,
	borderRadius: '3rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	overflow: 'hidden',
	padding: '5rem',
	gap: '4rem',
})
