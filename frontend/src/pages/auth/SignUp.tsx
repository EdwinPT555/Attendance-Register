import React from "react";
import { Button, CardHeader, Grid, Paper, TextField } from "@mui/material";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import {
  AccountCircle,
  EmailOutlined,
  PhoneIphone,
  VpnKey,
} from "@mui/icons-material";

const SignUp = () => {
  return (
    <div className={styles.loginContainer}>
      <Paper
        variant="outlined"
        sx={{ boxShadow: 20 }}
        className={styles.loginPaper}
      >
        <CardHeader title="SignUp here" style={{ color: "#3f51b5" }} />
        <br />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={1}
        >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="User Name"
                type="string"
                required
                autoFocus
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
          </Grid>
          <br />

          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <EmailOutlined />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Email"
                type="email"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <br />

          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <PhoneIphone />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Phone Number"
                type="number"
                required
                // value={phone}
                // onChange={(e) => setphone(e.target.value)}
              />
              {/* <MuiPhoneNumber
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"in"}
                required
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              /> */}
            </Grid>
          </Grid>
          <br />

          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VpnKey />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Password"
                type="password"
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <br />

          <Grid
            item
            container
            justifyContent="center"
            direction="row"
            spacing={2}
          >
            <Grid item>
              <Link to="/" className={styles.link}>
                <Button variant="contained" color="primary" type="reset">
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
                // onClick={PostData}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <p>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>{" "}
          here
        </p>
      </Paper>
    </div>
  );
};

export default SignUp;
