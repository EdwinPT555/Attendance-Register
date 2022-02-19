import React from "react";
import TopNavigationDefault from "./components/nav/TopNavigationDefault";
import Login from "./pages/auth/Login";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <TopNavigationDefault />
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
