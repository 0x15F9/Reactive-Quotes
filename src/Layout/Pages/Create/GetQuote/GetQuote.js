import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '95vw',
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

const GetQuote = (props) => {
    const classes = useStyles();
    
    return(
        <div>
            <TextField
                id="standard-uncontrolled"
                label="Quote"
                defaultValue={ props.quote }
                className={classes.textField}
                margin="normal"
                onChange={ (event) => props.updateQuote(event) }
            />
            <Button 
                variant="outlined" 
                className={classes.button}
                onClick={ () => console.log("clicked") } >
                Next
            </Button>
        </div>
    )
}


export default GetQuote;