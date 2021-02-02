import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { object, string } from 'prop-types';

const Title = ({title, className}) => {

    return (
        <Grid container direction="column" wrap="nowrap" id='ffs'>
            <Grid item className={className}>
                <Typography variant='h5'>
                   {title}
                </Typography>
            </Grid>
        </Grid>
    )
};


Title.protoTypes = {
    className: object,
    title: string.isRequired

}

export default Title;


