import * as React from "react";
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