import * as React from "react";
import { graphql } from "gatsby";
import { Router } from "@reach/router";

import ArticleForm from "../components/articleForm"
import PrivateRoute from "../components/privateRoute"

const App = ({ data }) => {
    return (
        <Router basepath="/create-article">
            <PrivateRoute path="/" component={ArticleForm} data={data} />
        </Router>
    )
}
export default App;

export const query = graphql `
query ArticleWritersQuery {
  allWritersJson {
    edges {
      node {
        email
      }
    }
  }
}`;
