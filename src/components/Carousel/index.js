import React, { useRef } from 'react';

import { string, object, number } from 'prop-types';
import { map, addIndex } from 'ramda';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"

import { useBreakpointBox } from '../../hooks'

import BoxImg from '../BoxImg'
import { useAllPicture } from './hook'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function NextArrow({ prev, position }) {
    const positionStyle = position === "right" ? { right: "3%" } : { left: "3%" }
    let onClick = null

    if (prev && prev.current && prev.current.slideNext)
        onClick = position === "right" ? () => prev.current.slideNext() : () => prev.current.slidePrev()
    return position === "right" ? (
        <ArrowForwardIosIcon
            fontSize="large"
            style={{ ...positionStyle, position: "absolute", top: "43%", zIndex: 1 }}
            onClick={onClick}
        />
    ) : (
            <ArrowBackIosIcon
                fontSize="large"
                style={{ ...positionStyle, position: "absolute", top: "43%", zIndex: 1 }}
                onClick={onClick}
            />
        );
}

NextArrow.propTypes = {
    position: string,
    prev: object,
};

const SampleNextArrow = (props) => (<NextArrow {...props} />)
const SamplePrevArrow = (props) => (<NextArrow {...props} />)

const mapIndexed = addIndex(map);

const CreateChildren = (className, slidesToShow) => {
    const { picture } = useAllPicture()

    return mapIndexed((elem, idx) => (<BoxImg key={idx} idx={idx} slidesToShow={slidesToShow} className={className} src={elem.src} elem={elem} />), picture);
}

CreateChildren.propTypes = {
    className: string,
    slidesToShow: number,
};

export const ItemsCarousel = ({ idx, styleCarousel, className }) => {
    const index = styleCarousel ? 2 : 0;
    const slidesToShow = useBreakpointBox() + index
    const children = CreateChildren(className, slidesToShow)
    const prev = useRef(null);

    const responsive = {
        0: {
            items: 2 + index
        },
        600: {
            items: 3 + index
        },
        960: {
            items: 4 + index
        },
        1280: {
            items: 5 + index
        },
        1920: {
            items: 6 + index
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <SamplePrevArrow prev={prev} />
            <SampleNextArrow position={"right"} prev={prev} />
            <AliceCarousel
                mouseTracking
                infinite={true}
                responsive={{...responsive}}
                disableDotsControls={true}
                disableButtonsControls={true}
                disableSlideInfo={true}
                ref={el => prev.current = el}
                items={children}
                {...styleCarousel}
            >
            </AliceCarousel>
        </div>
    )
}

ItemsCarousel.propTypes = {
    className: string,
    styleCarousel: object,
};

const Carousel = ({ styleCarousel, className }) => {
    return (<ItemsCarousel styleCarousel={styleCarousel} className={className} />)
}

Carousel.propTypes = {
    className: string,
    styleCarousel: object,
};

export default Carousel;
