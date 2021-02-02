import React from 'react';

import Grid from '@material-ui/core/Grid';
import ListPicture from '../listPicture'
import useStyles from './styles'
import Title from '../Title'
import { useMyList } from "./hook"


const MyList = () => {
    const classes = useStyles()
    const { picture } = useMyList()

    return (
        <Grid container direction="column" wrap="nowrap" id='ffs'>
            <Title className={classes.container} title={"My List"}/>
            <ListPicture picture={picture} />
        </Grid>
    )
};

export default MyList;

