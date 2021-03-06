import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: 'white',
    },
  }));

const Footer = (props) => {
    const classes = useStyles();
    return (
<div className={classes.root}>
    
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Made by Isfaaq G.</Typography>
        </Container>
      </footer>
    </div>
    )
}

export default Footer;