import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

const colorVariants = Object.fromEntries(
	Object.entries(vars.color).map(([key, value]) => [
		`&[${key.toLowerCase()}]`,
		{
			color: value,
		},
	]),
)

const alignVariants = {
	'&[center]': {
		textAlign: 'center',
	},
	'&[left]': {
		textAlign: 'left',
	},
	'&[right]': {
		textAlign: 'right',
	},
}

const decorateVariants = {
	'&[underline]': {
		textDecoration: 'underline',
	},
	'&[line-through]': {
		textDecoration: 'line-through',
	},
}

const variants = {
	...colorVariants,
	...alignVariants,
	...decorateVariants,
}

export const titleStyle = {
	fontSize: '6rem',
	fontWeight: '700',
}

export const smallTextStyle = {
	fontSize: '4rem',
	fontWeight: '500',
}

const subtitleStyle = {
	fontSize: '4.5rem',
	fontWeight: '700',
}

export const textContentStyle = {
	fontSize: '4.5rem',
	fontWeight: '500',
}

export const tokenStyle = {
	fontSize: '4rem',
	fontWeight: '700',
}

export const title = style({
	...titleStyle,
	...variants,
})

export const smallText = style({
	...smallTextStyle,
	...variants,
})

export const subtitle = style({
	...subtitleStyle,
	...variants,
})

export const textContent = style({
	...textContentStyle,
	...variants,
})

export const token = style({
	...tokenStyle,
	...variants,
})
