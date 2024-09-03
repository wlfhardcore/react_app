import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    backgroundColor: props => props.theme.main,
    color: props => props.theme.text,
    transition: 'all 0.3s ease',
    flexDirection: 'row',
    borderRadius: '24px',
    userSelect: 'none',
    overflow: 'hidden',
    display: 'flex',
    border: 'none',
    height: '40px',
    width: '80px',
  },

  sessionTime: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '115px',
    minWidth: '50%',
    display: 'flex',
    border: 'none',
    width: '50%',
    fontSize: '28px'
  }

});

export default useStyles;
