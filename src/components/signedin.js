import React from 'react';
import authentication from '../service/firebase';

const SignedIn = ({ user }) => {
    return (
      <div className="profile">
        <h1>Hello, <span></span>{user.displayName}</h1>
        <img src={user.photoURL} alt="" />
        <button className="button signout" onClick={() => authentication.signOut()}>Sign out</button>
      </div>
    )
}
export default SignedIn; 