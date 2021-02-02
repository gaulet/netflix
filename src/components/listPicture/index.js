import React from 'react';
import { array } from 'prop-types';

import { map, addIndex } from 'ramda';
import { useBreakpointBox } from "../../hooks"

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import BoxImg from '../BoxImg'
import useStyles from './styles';

const mapIndexed = addIndex(map);

const ListPicture = ({ picture = [] }) => {
    const classes = useStyles();
    const slidesToShow = useBreakpointBox()

    return (
        <Grid className={classes.container} >
            {mapIndexed((elem, idx) => (
                <div key={idx} id={`${idx}f`} >
                    <Grow in={true} timeout={idx * 200 + 500}>
                        <div>
                            <BoxImg key={idx} src={elem.src} idx={idx} slidesToShow={slidesToShow} elem={elem} />
                        </div>
                    </Grow>
                </div>
            ), picture)}
        </Grid>
    )
}

ListPicture.protoTypes = {
    value: array.isRequired
}

export default ListPicture;