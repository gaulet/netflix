import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100vw",
        // height: "auto",
    },
    search: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "auto",
        zIndex: 800,
    },
    parallax: {
        width: '100vw',
        minHeight: (props) => `${props.minHeight}vh`,
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.easeIn,
            duration: "350ms"
        })
    },
    buttons: {
        position: "absolute",
        top: "75%",
        left: "6%",
    },
    button: {
        width: "45px",
        height: "45px",
        padding: "7px 7px 7px 7px",
        border: "2px solid rgba(255, 255, 255, 0.4)",
        background: "rgba(0, 0, 0, 0.2)",
        borderRadius: "50%",
        marginLeft: 10,
        "&:hover": {
            border: "2px solid rgba(255, 255, 255, 0.7)",
            padding: "4px 4px 4px 4px",

        },
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.easeIn,
            duration: "200ms"
        })
    },
    gradiant2: {
        position: "absolute",
        top: 0,
        objectFit: "cover",
        objectPosition: "center",
        left: 0,
        width: "100%",
        height: (props) => `${props.minHeight + 1}vh`,
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.easeIn,
            duration: "350ms"
        })
    },
    gradiant: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: (props) => `${props.minHeight + 1}vh`,
        background: 'linear-gradient(to top, black, rgba(0, 0, 0, 0.12))',
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.easeIn,
            duration: "350ms"
        })
    },
}));
