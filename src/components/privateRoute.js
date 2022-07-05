import React from "react"
import { navigate } from "gatsby"

import authentication from '../service/firebase';

var userIsWriter = false;

const PrivateRoute = ({ component: Component, location, data, ...rest }) => {

  var writerEmails = data.allWritersJson.edges.map(edge => edge.node.email);
  var user = authentication.currentUser;

  for (var i = 0; i < writerEmails.length; i++) {
    if (user != null && user.email === writerEmails[i]) {
      userIsWriter = true;
      break;
    } else if (user == null) {
      userIsWriter = false;
    }
  }

  if (!userIsWriter && location.pathname !== `/`) {
    navigate("/")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute;