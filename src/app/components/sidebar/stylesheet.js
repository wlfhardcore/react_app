import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    blur: {
        backgroundColor: 'rgba(50,50,50,0.5)',
        color : props => props.theme.text,
        transform: 'translateX(100%)',
        flexDirection: 'row-reverse',
        transition: 'all 0.3s ease',
        userSelect: "none",
        position: 'fixed',
        display: 'flex',
        height: '100%',
        width: '100%',
        zIndex: 1000,
        right: 0,
        top: 0,
        '&.closed': {
            transform: 'translateX(100%)',
        },
        '&.open': {
            transform: 'translateX(0)',
        },
        '@media (min-width: 1201px)': {
            display: 'none',
        },
    },

    menu: {
        backgroundColor: props => props.theme.main,
        color : props => props.theme.text,
        transition: 'all 0.3s ease',
        height: '100%',
        color: '#fff',
        width: '75%',

    },

    menuButton: {
        color : props => props.theme.text,
        justifyContent:'space-between',
        flexDirection: 'row-reverse',
        paddingRight: '20px',
        paddingTop: '28px',
        display: 'flex',
        marginBottom: '20px',
    },

    buttonText:{
        color: props => props.theme.text,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        gap: '10px',
        padding:'10px'
    },
    text: {
        color: props => props.theme.text,
        paddingInline: '25px',
        fontSize: '2em',
    },
});
export default useStyles;