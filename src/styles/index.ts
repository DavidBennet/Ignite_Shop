import { createStitches } from "@stitches/react"

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            Green500: '#00875F',
            Green300: '#00B37E',
            Gray900: '#121214',
            Gray700: '#202024',
            Gray500: '#C4C4CC',
            Gray300: '#E1E1E6',
            Gray100: '#FFFFFF',
            White: '#FFFFFF',
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
})