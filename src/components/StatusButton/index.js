import React from 'react';

import { object } from 'prop-types';
import { useConnect, useItemMyListTrue } from './hook'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ADD = "Ajouter a ma liste"
const DELETE = "Supprimer de la liste"

const StatusButton = ({ elem }) => {
    const { setAddPicture, setDeletePicture } = useConnect(elem)
    const { bool } = useItemMyListTrue(elem.src)

    return (
        <Button onClick={bool ? setDeletePicture : setAddPicture} variant="contained">
            <Typography>
                {bool ? DELETE : ADD}
            </Typography>
        </Button>
    );
}

StatusButton.propTypes = {
    elem: object.isRequired,
};

export default StatusButton;