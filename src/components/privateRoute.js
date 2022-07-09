import React from "react"
import { navigate } from "gatsby"

var userIsWriter = false;

const PrivateRoute = ({ component: Component, location, data, ...rest }) => {

  if (typeof window !== `undefined`) {
    userIsWriter = JSON.parse(window.localStorage.getItem('userIsWriter'));
  }

  if (!userIsWriter) {
    if (typeof window !== `undefined`) {
      navigate(-1);
    }
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute;