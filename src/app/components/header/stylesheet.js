import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerContainer: {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',
    backgroundColor: props => props.theme.main,
    color : props => props.theme.text,
    transition: 'all 0.3s ease',
    flexDirection: 'row',
    alignItems: 'center',
    userSelect: 'none',
    display: 'flex',
    border:'none',
    height: '6em',
    width: '100%',
  },

  logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      userSelect: 'none',
      display: 'flex',
      height: '100%',
  },

  userContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      userSelect: 'none',
      display: 'flex',
      height: '100%',
      '@media (max-width: 760px)': {
            display: 'none',
        }
  },

  img: {
    marginInline: '1em',
    height: '4em',
  },

  menu:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginInline: '1em',
    userSelect: 'none',
    display: 'flex',
    height: '65%',
    width: '30px',
        '@media (min-width: 760px)': {
            display: 'none',
        }
  },

  MenuandUserContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex'
  },
});

export default useStyles;
