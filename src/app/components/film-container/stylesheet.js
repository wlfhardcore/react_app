import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    filmContainer:{
        height:'680px',
        width:'540px',
        borderRadius:'10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },

    img:{
        objectFit: 'cover',
        height: '680px',
        width: '540px',
        flexShrink: 0,
    }
});

export default useStyles;
