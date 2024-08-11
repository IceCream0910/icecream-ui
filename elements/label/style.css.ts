import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const labelTitle = style({
	color: vars.color.L9,
})

export const labelWrapper = style({
	paddingBottom: '3rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
})

export const descriptionStyle = style({
	color: vars.color.L6,
})

export const messageStyle = style({
	color: vars.color.skyblue,
	display: 'flex',
	paddingTop: '2rem',
})
