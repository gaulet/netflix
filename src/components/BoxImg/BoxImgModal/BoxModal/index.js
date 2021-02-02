import React from 'react';

import { string, object, number, func } from 'prop-types';
import StatusButton from "../../../StatusButton"

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';

import classNames from 'classnames';

import useStyles from './styles';

const Script = () => {
    const classes = useStyles();

    return (
        <Grid item container flex-wrap="wrap" className={classes.centerElem} >
            <Grid item xs={12} sm={7} >
                <Typography paragraph variant="h6" className={classes.outlineStyle} >
                    2019
                    </Typography>
                <Typography variant="h6" className={classNames(classes.outlineStyle, classes.borderTypo)} >{"16+  "} </Typography>
                <Typography paragraph className={classes.outlineStyle} variant="h6"  >
                    3 saisons
                    </Typography>
                <Typography paragraph gutterBottom variant="h6"  >
                    S3:E2 "Chapitre deux : Comme des rats"
                    </Typography>
                <Typography paragraph gutterBottom className={classNames(classes.bottomTypo)} >
                    Nancy et Jonathan se penchent sur un tuyau alarmant. Steve et Robin sont recrutes pour une mission secrete. Max et Onze font des courses. Billy a des visions troublante.
                    </Typography>
            </Grid>
            <Hidden xsDown>
                <Grid item xs={12} sm={5} className={classes.paddingLeft}>
                    <Typography paragraph gutterBottom className={classNames(classes.bottomTypo, classes.dis)}>
                        Winona Ryder, David Harbour, Finn Wolfhard, plus
                    </Typography>
                    <Typography paragraph gutterBottom className={classNames(classes.bottomTypo, classes.genre)} >
                        Séries SF, Séries pour ados, Thrillers TV
                    </Typography>
                    <Typography paragraph gutterBottom className={classes.type} >
                        Effrayant, Palpitant
                    </Typography>
                </Grid>
            </Hidden>
        </Grid>
    )
}

const PreviewModal = ({ idx, src, handleClose, elem }) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.box} >
            <img key={idx} src={src} alt="asadsag" className={classes.picture} />
            <Grid className={classes.gradiant}> </Grid>
            <Grid container alignItems="center" className={classes.buttons} >
                <StatusButton elem={elem} >Ajouter a ma liste</StatusButton>
                <Check className={classes.button} />
                <Add className={classes.button} />
            </Grid>
            <Close className={classes.buttonClose} onClick={handleClose} />
        </Grid>
    )
}

PreviewModal.propTypes = {
    idx: number.isRequired,
    src: string.isRequired,
    elem: object.isRequired,
    handleClose: func.isRequired,
};

const BoxModal = ({ idx, src, handleClose, elem }) => {
    const classes = useStyles();

    return (
        <Grid container flex-direction="column" flex-wrap="nowrap" justify="center" className={classes.root}>
            <PreviewModal idx={idx} src={src} handleClose={handleClose} elem={elem} />
            <Script />
        </Grid>
    );
}

BoxModal.propTypes = {
    idx: number.isRequired,
    src: string.isRequired,
    elem: object.isRequired,
    handleClose: func.isRequired,
};

export default BoxModal;