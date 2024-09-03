import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    button: {
        backgroundColor:'transparent',
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        justifyContent: 'center',
        alignItems: 'center',
        marginInline: '3px',
        userSelect: "none",
        cursor: 'pointer',
        display: 'flex',
        border:'none',
    }
});
export default useStyles;