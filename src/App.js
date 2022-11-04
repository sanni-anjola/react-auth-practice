import React from "react";
import Layout from "./components/Layout/Layout";
import Routes from "./Router/Routes";
import AuthProvider from "./store/auth-context";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes />
      </Layout>
    </AuthProvider>
  );
};

export default App;
