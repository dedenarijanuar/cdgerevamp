import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <div className="pageNotFound  container">
      <h1 className="pageNotFound-title">NOT FOUND</h1>
      <p className="pageNotFound-description">{`
(___________________________()6 \`-,
(   ______________________   /''"\`
//\\                      //\\
"" ""                     "" ""
      `}</p>
    </div>
  </Layout>
);

export default NotFoundPage;
