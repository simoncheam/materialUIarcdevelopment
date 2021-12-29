import React from 'react'
// import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo:{
        height: "7em"
    }
}))

const Header = (props) => {

    // this gives access to toolbarmargin
    const classes = useStyles()

    return (
        <React.Fragment>

            <ElevationScroll>

                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img alt="company logo" className={classes.logo} src={logo}/>
                        {/* <Typography variant="h3" color="secondary">Arc Development</Typography> */}

                    </Toolbar>

                </AppBar>
            </ElevationScroll>

            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Header
