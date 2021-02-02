import React from 'react';

import { Link } from 'react-router-dom';
import { string, func } from 'prop-types';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';


import useStyles from './styles';
import { MY_LIST, HOME_ROUTE_PATH } from '../../routes';

const INPUT_HEIGHT = '30px';

const HideOnScroll = (props) => {
    const { children, window, value } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={value !== "" ? true : !trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    value: string.isRequired,
};

const InputBar = ({ value, onChange }) => {
    const classes = useStyles();

    const handleChange = (e) => {
        onChange(e.target.value);
    }
    const clearValue = () => onChange('');

    return (
        <TextField
            label={<SearchIcon className={classes.searchIcon} fontSize="small" />}
            className={classes.root}
            margin="dense"
            variant="outlined"
            value={value}
            onChange={handleChange}
            InputProps={{
                endAdornment: value && (
                    <IconButton size="small" onClick={clearValue}>
                        <CancelIcon fontSize="small" className={classes.icons} />
                    </IconButton>
                ),
                style: { height: INPUT_HEIGHT },
            }}
        />
    );
};

InputBar.propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
};

const Header = ({ value, onChange }) => {
    const classes = useStyles();

    return (
        <HideOnScroll value={value}>
            <Grid container justify="space-around" wrap="nowrap" alignItems="center" className={classes.header}>
                <Grid item>
                    <Link to={HOME_ROUTE_PATH} onClick={() => onChange('')}>
                        <img src={'/img/N.png'} alt="asa" className={classes.logo} />
                    </Link>
                </Grid>
                <Grid item>
                    <InputBar value={value} onChange={onChange} />
                </Grid>
                <Grid item >
                    <Link to={MY_LIST} onClick={() => onChange('')}>
                        <Typography variant="h6"  >
                            Mylist
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </HideOnScroll>
    )
};

Header.propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
};


export default Header;
