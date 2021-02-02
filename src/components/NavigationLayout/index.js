import React, { useState, useEffect } from 'react';
import { node, string, bool } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

import StatusButton from "../StatusButton"

import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';

import Header from '../Header';
import SearchElem from '../SearchElem'
import useStyles from './styles';
import Title from '../Title'

import { HEIGHT_MENU_TOP } from '../../constants'

import './styles.css';

const Anime = ({ value }) => {
    const [size, setSize] = useState(HEIGHT_MENU_TOP.css)
    const classes = useStyles({ minHeight: size });



    useEffect(() => {
        if (value !== "" && value.length < 2)
            setSize(20)
        if (value === "")
            setSize(HEIGHT_MENU_TOP.css)
    }, [value])

    return (
        <Grid item container className={classes.parallax} >
            <video className={classes.gradiant2} src="/media/video.mp4" autoPlay={true} muted loop/>
            <Box className={classes.gradiant} >
            <Grid container alignItems="center" className={classes.buttons} >
                <Title title={"MARVEL"} />
                <StatusButton elem={{src: '/img/versace.jpg'}} >Ajouter a ma liste</StatusButton>
                <Check className={classes.button} />
                <Add className={classes.button} />
            </Grid>
            </Box>
        </Grid>
    );
}

Anime.propTypes = {
    value: string.isRequired,
};

const Childs = ({ value, checked, children }) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.root} >
            <Grow in={checked} timeout={500} >
                <div>
                    {children}
                </div>
            </Grow>
            <Grow in={!checked} timeout={500} >
                <div id="searchElem" className={classes.search}>
                    <SearchElem value={value} />
                </div>
            </Grow>
        </Grid>
    )
}

Childs.propTypes = {
    value: string.isRequired,
    checked: bool.isRequired,
    children: node.isRequired
};

const NavigationLayout = ({ children }) => {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        if (value !== "" && value.length < 2)
            setChecked(false)
        if (value === "")
            setChecked(true)
    }, [value])

    return (
        <Grid container direction="column" wrap="nowrap">
            <Grid className={classes.header} item>
                <Header value={value} onChange={setValue} />
            </Grid>
            <Grid item>
                <Anime value={value} />
            </Grid>
            <Childs value={value} checked={checked} children={children} />
        </Grid>
    );
};

NavigationLayout.propTypes = {
    children: node.isRequired,
};

export default NavigationLayout;

