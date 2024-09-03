import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    bodyContainer: {
        backgroundColor: props => props.theme.background,
        textcolor: props => props.theme.text,
        transition: 'all 0.3s ease',
        minHeight:'100vb',
        border:'none',
        height:'100%',
    }
});
export default useStyles;
