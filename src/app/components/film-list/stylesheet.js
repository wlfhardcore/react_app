import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    slider: {
        position: 'relative', 
        marginTop: '40px', 
        marginLeft:'20px',
    },

    sliderImageWrapper: {
        overflow: 'hidden',
        height: '700px',
        width: '600px', 
        flexShrink: 0,
    },

    sliderImage: {
        objectFit: 'cover',
        height: '700px',
        flexWrap:'wrap',
        width: '600px',
        flexShrink: 0,

    },

    prevButton: {
        backgroundColor: props => props.theme.main,
        transform: 'translateY(-50%)',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        borderRadius:'10px',
        cursor: 'pointer',
        display: 'flex',
        padding: '10px',
        height: '40px',
        border: 'none',
        width: '30px',
        left: '10px',
        top: '50%',
        zIndex: 1,
        '&:hover': {
            backgroundColor: '#9AB54E',
        },
    },

    nextButton: {
        backgroundColor: props => props.theme.main,
        transform: 'translateY(-50%)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius:'10px',
        cursor: 'pointer',
        display: 'flex',
        padding: '10px',
        height: '40px',
        border: 'none',
        width: '30px',
        right: '10px',
        top: '50%',
        zIndex: 1,
        '&:hover': {
            backgroundColor: '#9AB54E',
        },
    },

    title: {
        color : props => props.theme.text,
        marginLeft: '30px', 
    }
});

export default useStyles;
