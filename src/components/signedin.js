import React from 'react';
import  Button from "react-bootstrap/Button";
import authentication from '../service/firebase';

const SignedIn = ({ user }) => {
    return (
      <div>
        {user ? <div><h1>Halo, {user.displayName}</h1>
        <img src={user.photoURL} alt="" /></div> : null}
        <Button className="button signout" onClick={() => authentication.signOut()}>Sign out</Button>
      </div>
    )
}
export default SignedIn; 