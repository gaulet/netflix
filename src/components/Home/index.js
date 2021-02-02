import React from 'react';
import Carousel from '../Carousel'

import Grid from '@material-ui/core/Grid';
import Title from '../Title'

import useStyles from './styles';

const carouselStyle = {
    duration: 400,
    autoPlay: true,
    startIndex: 1,
    fadeOutAnimation: true,
    mouseDragEnabled: true,
    playButtonEnabled: true,
    autoPlayInterval: 2000,
    autoPlayDirection: "rtl",
    autoPlayActionDisabled: true,
}

const Home = () => {
    const classes = useStyles();
    return (
        <Grid item container wrap="nowrap" alignItems="center" direction="column" >

            <Grid item className={classes.ajustePadding2} >
                <Carousel styleCarousel={carouselStyle} className={classes.pictureI} />
            </Grid>

            <Title className={classes.ajustePadding} title={"Ma liste"}/>
            <Grid item className={classes.ajustePadding2} style={{ paddingBottom: 7 }}>
                <Carousel />
            </Grid>

            <Title className={classes.ajustePadding} title={"Tendances actuelles"}/>
            <Grid item className={classes.ajustePadding2}>
                <Carousel />
            </Grid>
        </Grid>
    )
};

export default Home;

