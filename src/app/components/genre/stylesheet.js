import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    shell: {
        backgroundColor: props => `rgba(${hexToRgb(props.theme.main)}, 0.5)`, // 0.5 saydamlık değeri
        color: props => props.theme.text,
        justifyContent: 'center',
        borderRadius: '15px',
        alignItems: 'center',
        userSelect: 'none',
        fontSize: '3vh',
        display: 'flex',
        height: '50px',
        width: '160px',
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
