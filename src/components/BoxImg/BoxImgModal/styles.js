import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: "100vw",
        height: "60vw",
        backgroundColor: "#fff",
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    back: {
        backgroundColor: "rgba(0,0,0, 0.88)",
    }
}));
