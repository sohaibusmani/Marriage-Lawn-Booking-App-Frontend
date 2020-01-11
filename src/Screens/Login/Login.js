import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';




const styles = makeStyles(theme => ({
    paper: {
        // marginTop: theme.spacing(8),
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class Login extends React.Component {
    state={
        username:null,
        password:null
    }

    handleTextFields = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { classes } = this.props;
        return (
            
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper} style={{ marginTop: '100px', }}>
                <Typography component="h1" variant="h3" style={{ textAlign: 'center' }}>
                    Login
          </Typography>
                <form className={classes.form} noValidate>
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                </form>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.userLogin}
                >
                    Login
            </Button>
                <span>Not a Member yet? </span>
                <span
                    // onClick={this.props.renderRegister}
                    style={{
                        color: 'blue',
                        // textDecoration: ''
                        cursor: 'pointer'
                    }}
                >Create Account</span>
            </div>

        </Container>
            
        )
    }
}

export default withStyles(styles)(Login);