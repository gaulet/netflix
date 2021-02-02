import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '700px',
        minHeight: '84vh',
        borderRadius: "10px",
        backgroundColor: "#141414",
    },
    box: {
        position: "relative",
        width: '100%',
        height: "400px",
    },
    gradiant: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "400px",
        background: "linear-gradient(to top,#141414,transparent 50%)",
    },
    picture: {
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        maxHeight: "400px",
        objectFit: "cover",
        objectPosition: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
    buttonClose: {
        position: "absolute",
        top: "15px",
        right: "15px",
        width: "35px",
        height: "35px",
        padding: "7px 7px 7px 7px",
        background: "#141414",
        borderRadius: "50%",
        "&:hover": {
            background: "#181818",
        }

    },
    centerElem: {
        width: "88%"
    },
    dis: {
        color: "#fff",
        "&::before": {
            content: '"Distribution: "',
            display: 'inline',
            color: "#777",
        }
    },
    genre: {
        color: "#fff",
        "&::before": {
            content: '"Genres: "',
            display: 'inline',
            color: "#777",
        }
    },
    type: {
        color: "#fff",
        "&::before": {
            content: '"Ce programme est: "',
            display: 'inline',
            color: "#777",
        }
    },
    BottomTypo: {
        marginBottom: "20px",
    },
    outlineStyle: {
        width: "60px",
        display: 'inline',
        marginRight: 10
    },
    borderTypo: {
        outline: "1px solid #777",
    },
    paddingLeft: {
        paddingLeft: 30,
    }
}));
