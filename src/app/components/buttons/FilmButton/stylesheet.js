import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    backgroundColor: props => props.theme.main,
    color: props => props.theme.text,
    transition: 'all 0.3s ease',
    flexDirection:'row',
    borderRadius:'24px',
    userSelect:'none',
    overflow:'hidden',
    height: '115px',
    display:'flex',
    width:'480px',
    border:'none',
  },

  img:{
    height: '115px',
    display:'flex',
    minWidth:'52%',
    border:'none',
    width:'52%',
  },

  filmName:{
    justifyContent:'center',
    alignItems:'center',
    height: '115px',
    minWidth:'50%',
    display:'flex',
    border:'none',
    width:'50%',
    fontSize:'28px'
  }

});

export default useStyles;
