import { useState, useEffect, useRef } from 'react';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HEIGHT_MENU_TOP } from './constants'

export const useBreakpoint = () => {
    const xs = useMediaQuery(useTheme().breakpoints.only('xs'));
    const sm = useMediaQuery(useTheme().breakpoints.only('sm'));
    const md = useMediaQuery(useTheme().breakpoints.only('md'));
    const lg = useMediaQuery(useTheme().breakpoints.only('lg'));
    const xl = useMediaQuery(useTheme().breakpoints.only('xl'));
    const [b, setB] = useState('')

    useEffect(() => {
        if (xs) setB("xs")
    }, [xs])

    useEffect(() => {
        if (sm) setB("sm")
    }, [sm])

    useEffect(() => {
        if (md) setB("md")
    }, [md])

    useEffect(() => {
        if (lg) setB("lg")
    }, [lg])

    useEffect(() => {
        if (xl) setB("xl")
    }, [xl])

    return b
}

const breakpointS = {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
}

export const useBreakpointBox = () => {
    const breakpoint = useBreakpoint('sm')
    const [slidesToShow, setSlideToShow] = useState(2)

    useEffect(() => {
        setSlideToShow(breakpointS[`${breakpoint}`])
    }, [breakpoint])

    return slidesToShow
}

export const useScrollCompar = (string) => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        const scrollY = window.scrollY + window.innerHeight
        const offsetTop = (window.innerHeight * HEIGHT_MENU_TOP.int) + document.getElementById(string).offsetTop +
            (document.getElementById(string).scrollHeight / 2)

        if (scrollY >= offsetTop) {
            setShowScroll(true)
        } else if (scrollY < offsetTop && showScroll) {
            setShowScroll(false)
        }
    };

    useEffect(() => {
        if (string && !showScroll)
            window.addEventListener('scroll', checkScrollTop)
        return () => {
            console.log("remove")
            window.removeEventListener('scroll', checkScrollTop)
        }
    })

    return string ? (showScroll) : (false)
}


export const useHover = () => {
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => {setValue(true)};
    const handleMouseOut = () => {setValue(false)};
  
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);
  
          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      },
      [ref]
    );
  
    return [ref, value];
  }
  