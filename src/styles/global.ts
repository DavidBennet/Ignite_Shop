import { globalCss } from ".";


export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        backgroundColor: '$Gray900',
        color: '$Gray100',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    }
})