import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    box: props => ({
        position: "relative",
        width: `${100 / (props.slidesToShow)}vw`,
        height: `${100 / (props.slidesToShow)}vw`,
        diplay: "flex",
        flexWrap: "column",
        justifyContent: "center",
    }),
    gradiantss: {
        position: "absolute",
        top: 0,
        objectFit: "cover",
        objectPosition: "center",
        left: 0,
        width: "100%",
        // height: (props) => `${props.minHeight + 1}vh`,
    },
}))
