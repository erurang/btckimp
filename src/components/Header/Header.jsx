import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));


const Header = (props) => {
    const classes = useStyles();
    // const { sections, title } = props;

    return (
        <>
            <Toolbar className={classes.toolbar} style={{ backgroundColor: "#000000", opacity: "0.9", position: "fixed", height: "80px", width: "100%", zIndex: "1" }}>
                {/*  */}
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    KIMP.BTC
                </Typography>
                {/* <Button variant="outlined" size="small">
                    네이버로 로그인
                </Button> */}
            </Toolbar>
            {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar> */}
        </>
    )
}

    ;

export default Header;