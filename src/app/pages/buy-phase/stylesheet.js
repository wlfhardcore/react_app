import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    desktop:{
        display: 'flex',
        flexDirection:'row',
        height:'100%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap',
        marginTop:'60px',
    },

});

export default useStyles;
