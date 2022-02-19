import React from "react";
import {
  Button,
  CardHeader,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <Paper
        variant="outlined"
        sx={{ boxShadow: 20 }}
        className={styles.loginPaper}
      >
        <CardHeader title="Login here" style={{ color: "#3f51b5" }} />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <TextField
              id="email"
              label="Email"
              type="email"
              required
              autoFocus
              //   onChange={(e) => setEmail(e.target.value)}
              //   value={email}
            />
          </Grid>

          <Grid item>
            <TextField
              id="password"
              label="Password"
              type="password"
              required
              //   onChange={(e) => setPassword(e.target.value)}
              //   value={password}
            />
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            direction="row"
            spacing={2}
          >
            <Grid item>
              <Link to="/" className={styles.link}>
                <Button
                  //   disabled={loading}
                  variant="outlined"
                  color="primary"
                  type="reset"
                >
                  Cancel
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                // disabled={loading}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <span>
          Dont you have account?{" "}
          <Link to="/signup" className={styles.link}>
            SignUp
          </Link>{" "}
          here..
        </span>
      </Paper>
    </div>
  );
};

export default Login;
