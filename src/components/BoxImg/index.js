import React, { useState} from 'react';

import classNames from 'classnames';
import { string, object, number, } from 'prop-types';

import { COLORGRADIENT } from '../../constants';
import ImgModal from "./BoxImgModal"
import useStyles from './styles';
import './styles.css'

const BoxImg = ({ idx, slidesToShow = 2, className, src, elem}) => {
    const classes = useStyles({ slidesToShow });
    const [open, setOpen] = useState(false);

return (
        <div key={idx} className={classes.box} >
            <div className="dd" onClick={() => setOpen(true)}>
            <img key={idx} src={src} alt="asadsag" className={classNames("pictureS", className)} style={COLORGRADIENT[Number(idx)]} />
                <div className={classNames({ "boxIn": !className })} />
            </div>
            <div>
                <ImgModal open={open} setOpen={setOpen} idx={idx} src={src} elem={elem} />
            </div>
        </div>
    )
}

BoxImg.propTypes = {
    idx: number.isRequired,
    className: string,
    slidesToShow: number,
    src: string.isRequired,
    elem: object.isRequired,
};

export default BoxImg;