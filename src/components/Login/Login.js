import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import image from "../../basic material/logos/Group 1329.png";

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInuser,setLoggedInUser] = useContext(UserContext);
     
    const history=useHistory();
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName,email} = result.user;
           const signInUser={name: displayName, email: email}
             setLoggedInUser(signInUser)
             history.replace(from)
             console.log(signInUser)
             
                 


            })
            .catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;

            });
    };
    return (
        <div>
            <img className="logimg" src={image} alt="" />

            <div className="forms">
                <div>
                 {/* <h4>Name:{loggedInuser.name}</h4> */}
                    <h3>LogIn With</h3>

                    <Button
                        className="Googlebtn"
                        size="lg"
                        variant="outline-primary"
                        onClick={googleSignIn}
                    >
                        <img
                            className="loginIMG"
                            src="https://i.ibb.co/Wv3mmHY/google.png"
                            alt=""
                        />
            Sign In with Google
          </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
