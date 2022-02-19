import React, { useState } from "react";
import {
  Button,
  CardHeader,
  Grid,
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import {
  AccountCircle,
  EmailOutlined,
  PhoneIphone,
  VpnKey,
} from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const PostData = (e: any) => {
    setLoading(true);
    e.preventDefault();

    if (
      !email.trim().length ||
      !username.trim().length ||
      !phone.trim().length ||
      !password.trim().length
    ) {
      toast.error("All fields required ☹️");
      setLoading(false);
      return;
    } else if (emailValidation(email)) {
      toast.error("Invalid Email☹️");
      setLoading(false);
      return;
    } else if (username.length < 5) {
      setLoading(false);
      toast.error("username must have 6 characters ☹️");
      return;
    } else if (passwordValidation(password)) {
      setLoading(false);
      toast.error("Enter a strong password ☹️");
      return;
    } else if (phone.length < 10) {
      setLoading(false);
      toast.error("Invalid Phone no ☹️");
      return;
    } else {
      alert("success");
      //   fetch("/signup", {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       username,
      //       email,
      //       phone,
      //       password,
      //     }),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       if (data.error) {
      //         toast.error(`${data.error}`);
      //       } else {
      //         toast.success(`${data.message}`);
      //         setTimeout(() => {
      //           navigate("/login");
      //         }, 5000);
      //       }
      //       setLoading(false);
      //     })
      //     .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Paper
        variant="outlined"
        sx={{ boxShadow: 20 }}
        className={styles.loginPaper}
      >
        <ToastContainer />
        <form className={styles.form} onSubmit={PostData}>
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </Grid>
            </Grid>
            <br />

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <VpnKey />
              </Grid>
              <Grid item>
                <Tooltip
                  placement="top"
                  title="required min 6 characters, min 1 special character & number"
                >
                  <TextField
                    id="input-with-icon-grid"
                    label="Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Tooltip>
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
                  <Button variant="outlined" color="primary" type="reset">
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Button
                  disabled={loading}
                  variant="contained"
                  color="primary"
                  type="submit"
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
        </form>
      </Paper>
    </div>
  );
};

export default SignUp;

const emailValidation = (email: string) => {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const passwordValidation = (password: string) => {
  return !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
    password
  );
};
