import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import firebase from "firebase";

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            if(res.user) Auth.setLoggedIn(true);
        })
        .catch(e => {
            setErrors(e.message);
        });
        // console.log(Auth);
        // Auth.setLoggedIn(true);
    };
    const AuthGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            if(user){
                Auth.setLoggedIn(true);
            }
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    return(
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"
                />
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="password"
                />
                <hr/>
                <button class="googleBtn" type="button" onClick={AuthGoogle}>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                    />join With Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Join;