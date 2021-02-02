import React from 'react';

import { string } from 'prop-types';
import ListPicture from '../listPicture'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useSearchPicture } from "./hook"
import useStyles from './styles';


const SearchElem = ({ value = "" }) => {
    const classes = useStyles();
    const { picture } = useSearchPicture(value)

    return (
        <Grid container direction="column" wrap="nowrap" id='ffs'>
            <Grid item className={classes.container}>
                <Typography variant='h5'>
                    Elem
                </Typography>
            </Grid>
            <ListPicture picture={picture} />
        </Grid>
    );
};

SearchElem.protoTypes = {
    value: string.isRequired
}

export default SearchElem;
