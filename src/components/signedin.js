import React from 'react';
import  Button from "react-bootstrap/Button";
import authentication from '../service/firebase';

const SignedIn = ({ user }) => {
    return (
      <div>
        <Button className="button signout" onClick={() => authentication.signOut()}>Sign out</Button>
      </div>
    )
}
export default SignedIn; 