import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainContainer: {
    height: 'calc(100vh - 6em)',
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
  },

  infoContainer: {
    flexDirection: 'column',
    display: 'flex',
    height: '100%',
    width: '40%',
    '@media (max-width: 760px)': {
      display: 'none',
    },
  },

  imageContainer: {
    height: 'calc(100vh - 6em)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    display: 'flex',
    width: '60%',
    '@media (max-width: 760px)': {
      display: 'none',
    },
  },

  img: {
    userSelect: 'none',
    height: '100vh',
    width: 'auto',
  },

  topics: {
    marginInline: '10px',
    flexDirection: 'row',
    userSelect: 'none',
    flexWrap: 'wrap',
    display: 'flex',
    gap: '22px',
  },

  texts: {
    color: props => props.theme.text,
    marginInline: '10px',
    userSelect: 'none',
  },

  subjectContainer: {
    width: '90%',
    marginInline: '10px',
  },

  subject: {
    color: props => props.theme.text,
    fontSize: '3vh',
    display: 'flex',
    userSelect: 'none',
  },

  mobileContainer: {
    display: 'none',
    '@media (max-width: 760px)': {
      display: 'flex',
    },
    backgroundPosition: 'center',
    backgroundSize: 'cover',

  },
  mobileInfoContainer: {
    backgroundColor: props => `rgba(${hexToRgb(props.theme.opposite)}, 0.5)`, 
    color: props => props.theme.text,
    backdropFilter: 'blur(5px)',
    height:'60vh',
    borderRadius:'30px',
    margin:'10px',
  },
  

});

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

export default useStyles;
