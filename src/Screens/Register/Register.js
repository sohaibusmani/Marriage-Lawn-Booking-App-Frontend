import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

class CreateAccount extends React.Component{
    render(){
        return(
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{marginTop: '100px'}}>
                <Typography component="h1" variant="h4" style={{textAlign: 'center', marginBottom: '20px'}}>
                    Create Account
          </Typography>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="username"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handleTextFields}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleTextFields}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm Password"
                        type="password"
                        id="confirm_password"
                        onChange={this.handleTextFields}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                </form>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    // className={classes.submit}
                    onClick={this.handleNext}
                >
                    Create Account
            </Button>
            </div>

        </Container>
        )
    }
}

export default CreateAccount;