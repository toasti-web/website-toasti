import React from 'react';
import  Button from "react-bootstrap/Button";

import { signInWithGoogle } from '../service/firebase';

const SignIn = () => (
    <div>
      <Button onClick={signInWithGoogle}>Sign in with google</Button>
    </div>
  );
export default SignIn; 