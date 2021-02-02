import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        width: "100vw",
        position: "fixed",
        background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
        height: 70,
        zIndex: 1000,
    },
    logo: {
        height: 40,
    },
    root: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: 4,
        border: 1,
        width: 200,
    },
    iconCancel: {
        paddingRight: 0,
    },
    searchIcon: {
        // opacity: "0.3",
        marginTop: -5.2,
        fill: theme.palette.primary.main,
    },
    icons: {
        fill: theme.palette.primary.main,
    },

}));
