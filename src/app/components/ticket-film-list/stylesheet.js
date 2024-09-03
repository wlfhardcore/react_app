import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    filmContainer: {
        backgroundColor: props => props.theme.listBackground,
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        flexDirection: 'column',
        borderRadius: '6px',
        height: '680px',
        display: 'flex',
        width: '550px',
        alignItems:'center',
    },

    title: {
        width:'85%',
        paddingInline:'50px',
    }

    
});

export default useStyles;
