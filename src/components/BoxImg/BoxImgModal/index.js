import React from 'react';

import { string, object, number, func, bool } from 'prop-types';
import BoxModal from "./BoxModal"

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles';

const ImgModal = ({ open, setOpen, idx, src, elem }) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    className: classes.back,
                }}
            >
                <Fade in={open} timeout={200}>
                    <BoxModal idx={idx} src={src} handleClose={handleClose} elem={elem} />
                </Fade>
            </Modal>
        </div>
    );
}

ImgModal.propTypes = {
    idx: number.isRequired,
    src: string.isRequired,
    elem: object.isRequired,
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default ImgModal;
