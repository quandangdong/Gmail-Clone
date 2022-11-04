import { Button } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { provider } from '../../firebase/firebase';
import { login } from "../../features/userSlice";
import "./Login.css";

const Login = () => {

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch(login(user));
        console.log("user ne: ", result );
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  return (
    <div className='login'>
      <div className="login_container">
        <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png" alt="google logo.png" />
        <Button variant='contained' color='primary' onClick={handleLogin}>Login with GOOGLE</Button>
      </div>
    </div>
  );
}

export default Login;
