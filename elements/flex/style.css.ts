import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const horzStyle = style({
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    selectors: {
        '&[x=center]': {
            justifyContent: 'center',
        },
        '&[x=right]': {
            justifyContent: 'flex-end',
        },
        '&[x=stretch]': {
            justifyContent: 'stretch',
        },
        '&[x=space]': {
            justifyContent: 'space-between',
        },
        '&[y=top]': {
            alignItems: 'flex-start',
        },
        '&[y=center]': {
            alignItems: 'center',
        },
        '&[y=bottom]': {
            alignItems: 'flex-end',
        },
        '&[linebreak]': {
            flexWrap: 'wrap',
        },
        '&[scroll]': {
            overflowX: 'auto',
            overflowY: 'hidden',
        },
    },
})

globalStyle(`.${horzStyle} > [data-fillx]`, {
    flexGrow: 1,
})

globalStyle(`.${horzStyle} > [data-filly]`, {
    alignSelf: 'stretch',
})

export const vertStyle = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    selectors: {
        '&[x=left]': {
            alignItems: 'flex-start',
        },
        '&[x=center]': {
            alignItems: 'center',
        },
        '&[x=right]': {
            alignItems: 'flex-end',
        },
        '&[y=center]': {
            justifyContent: 'center',
        },
        '&[y=bottom]': {
            justifyContent: 'flex-end',
        },
        '&[y=space]': {
            justifyContent: 'space-between',
        },
        '&[y=stretch]': {
            justifyContent: 'stretch',
        },
        '&[linebreak]': {
            flexWrap: 'wrap',
        },
        '&[scroll]': {
            overflowY: 'auto',
            overflowX: 'hidden',
        },
        '&[fade]': {
            position: 'relative',
        },
    },
})

globalStyle(`.${vertStyle}[fade]::before`, {
    content: '""',
    position: 'sticky',
    top: '-2rem',
    right: 0,
    width: '100%',
    background: `linear-gradient(180deg, ${vars.color.L1} 0%, rgba(255, 255, 255, 0) 100%)`,
    display: 'block',
    padding: 'var(--fade-size, 6rem)',
    marginTop: '-12rem',
    zIndex: 10,
    pointerEvents: 'none',
})

globalStyle(`.${vertStyle}[fade]::after`, {
    content: '""',
    position: 'sticky',
    bottom: '-2rem',
    right: 0,
    width: '100%',
    display: 'block',
    padding: 'var(--fade-size, 6rem)',
    background: `linear-gradient(0deg, ${vars.color.L1} 0%, rgba(255, 255, 255, 0) 100%)`,
    marginTop: '-12rem',
    zIndex: 10,
    pointerEvents: 'none',
})

globalStyle(`.${vertStyle} > [data-fillx]`, {
    alignSelf: 'stretch',
})

globalStyle(`.${vertStyle} > [data-filly]`, {
    flexGrow: 1,
})