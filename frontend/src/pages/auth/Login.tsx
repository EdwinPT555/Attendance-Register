import React, { useState } from "react";
import { Button, CardHeader, Grid, Paper, TextField } from "@mui/material";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const PostData = (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (emailValidation(email) || passwordValidation(password)) {
      setLoading(false);
      toast.error("Invalid email or password☹️");
      return;
    } else {
      alert('logged in')
      //   fetch("/login", {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email,
      //       password,
      //     }),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       if (data.error) {
      //         toast.error(`${data.error} 🙁`);
      //       } else {
      //         localStorage.setItem("jwt", data.token);
      //         localStorage.setItem("user", JSON.stringify(data.user));
      //         toast.success("Successfully Logged in 😍");
      //         setTimeout(() => {
      //           history.push("/home");
      //         }, 2000);
      //       }
      //       setLoading(false);
      //     })
      //     .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <ToastContainer />
      <Paper
        variant="outlined"
        sx={{ boxShadow: 20 }}
        className={styles.loginPaper}
      >
        <form onSubmit={PostData}>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>

            <Grid item>
              <TextField
                id="password"
                label="Password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
                    disabled={loading}
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
                  disabled={loading}
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
        </form>
      </Paper>
    </div>
  );
};

export default Login;

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
